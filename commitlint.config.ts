import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  plugins: ['commitlint-plugin-tense'],
  rules: {
    'tense/subject-tense': [
      RuleConfigSeverity.Error,
      'always',
      { firstOnly: true, allowedTenses: ['present-imperative'] },
    ],
  },
};

export default config;
