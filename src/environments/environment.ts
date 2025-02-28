import { Environment } from './types/environment';

export const environment: Environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200',
    name: 'ATM Management System',
  },
  apis: {
    default: {
      url: 'https://67c1330a61d8935867e22825.mockapi.io/api/v1/',
      rootNamespace: '',
    },
  },
};
