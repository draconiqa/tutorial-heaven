// @ts-check

const { defaultGetMetadata, defaultGenerateIdentifierType } = require('kanel');
const { kyselyTypeFilter, makeKyselyHook } = require('kanel-kysely');

/** @type {import('kanel').Config} */
module.exports = {
  connection: {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'th_db',
  },
  preDeleteOutputFolder: true,
  outputPath: './libs/db/src/lib/models/generated',
  typeFilter: kyselyTypeFilter,
  preRenderHooks: [makeKyselyHook()],
  enumStyle: 'type',
  getMetadata: (details, generateFor, instantiatedConfig) =>
    nameToSingular(details, customDetails =>
      defaultGetMetadata(customDetails, generateFor, instantiatedConfig),
    ),
  generateIdentifierType: (column, details, instantiatedConfig) =>
    nameToSingular(details, customDetails =>
      defaultGenerateIdentifierType(column, customDetails, instantiatedConfig),
    ),
};

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
