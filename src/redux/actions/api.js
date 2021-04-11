// action_types;
export const API_REQUEST = 'API_REQUEST';

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