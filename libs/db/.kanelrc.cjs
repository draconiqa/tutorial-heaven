// @ts-check

const { defaultGetMetadata, defaultGenerateIdentifierType } = require('kanel');
const { kyselyTypeFilter, makeKyselyHook } = require('kanel-kysely');
const prettier = require('prettier');
const path = require('node:path');

/** @type {import('kanel').Config} */
module.exports = {
  connection: {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'th_db',
  },
  preDeleteOutputFolder: true,
  outputPath: path.join(__dirname, 'src/lib/models/generated'),
  typeFilter: kyselyTypeFilter,
  preRenderHooks: [makeKyselyHook()],
  postRenderHooks: [prettierHook()],
  enumStyle: 'type',
  getMetadata: (details, generateFor, instantiatedConfig) => {
    const metadata = nameToSingular(details, customDetails =>
      defaultGetMetadata(customDetails, generateFor, instantiatedConfig),
    );
    return { ...metadata, name: `${metadata.name}Model` };
  },
  generateIdentifierType: (column, details, instantiatedConfig) =>
    nameToSingular(details, customDetails =>
      defaultGenerateIdentifierType(column, customDetails, instantiatedConfig),
    ),
};

/**
 * Creates post-render hook that formats output source code using Prettier.
 * @returns {import('kanel').PostRenderHook}
 */
function prettierHook() {
  return async (path, lines) => {
    const options = await prettier.resolveConfig(path);
    const text = await prettier.format(
      [
        // post-render hook strips these comments otherwise for some reason
        '// @generated',
        '// This file is automatically generated by Kanel. Do not modify manually.',
        ...lines,
      ].join('\n'),
      {
        ...options,
        filepath: path,
      },
    );
    return text.split('\n');
  };
}

/**
 * Transforms plural PostgreSQL table names to singular TypeScript types.
 * @param {TDetails} details Original `details` parameter.
 * @param {(customDetails: TDetails) => TResult} fn Default transform function accepting details.
 * @returns {TResult} Result from transform function with patched names.
 * @template {{name: string, schemaName: string}} TDetails Type of function's `details` parameter.
 * @template {{comment?: string[]}} TResult Function's return type.
 */
function nameToSingular(details, fn) {
  // default transform if not pluralized
  if (!details.name.endsWith('s')) {
    return fn(details);
  }
  // transform with singular name
  const name = details.name.slice(0, -1);
  const result = fn({ ...details, name });
  // if postgres table name in comments, replace with original plural
  if (!result.comment) {
    return result;
  }
  return {
    ...result,
    comment: result.comment.map(comment =>
      comment.endsWith(`${details.schemaName}.${name}`)
        ? `${comment}s`
        : comment,
    ),
  };
}