// action_types;
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';

//action creators
export const apiRequest = ({ body, method, url, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
});

export const apiSuccess = ({ response, feature }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
});