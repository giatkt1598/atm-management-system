import { Environment } from './types/environment';

export const environment: Environment = {
  production: true,
  application: {
    baseUrl: '',
    name: '',
  },
  apis: {
    default: {
      url: '',
      rootNamespace: '',
    },
  },
};
