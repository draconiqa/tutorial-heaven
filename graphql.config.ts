import type { IGraphQLConfig } from 'graphql-config';
import api from './apps/api/graphql.config';
import cms from './apps/cms/graphql.config';
import website from './apps/website/graphql.config';

const config: IGraphQLConfig = {
  projects: {
    api,
    cms,
    website,
  },
};

export default config;
