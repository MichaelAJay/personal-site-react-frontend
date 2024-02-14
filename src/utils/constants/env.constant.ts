import { getEnvVar } from '../functions/get-env-var.function';

export const ENV = {
  apiUrl: getEnvVar('REACT_APP_API_URL'),
};
