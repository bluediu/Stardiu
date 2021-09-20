// eslint-disable-next-line no-undef
const api_conn = process.env.REACT_APP_API_URL;

export const api_enpoint = {
  login: `${api_conn}/auth/login`,
  renew: `${api_conn}/auth/renew`,
  createUser: `${api_conn}/users`,
};
