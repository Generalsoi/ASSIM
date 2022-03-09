import axios from "axios";

const http = axios.interceptors.response.use(null, (exception) => {
  const expected =
    exception.response &&
    exception.response.status >= 400 &&
    exception.response.status < 500;

  if (!expected) {
    // handle unexpected errors
    console.log(exception.response);
  }

  return Promise.reject();
});

export default {
  get: http.get,
  post: http.post,
  put: http.put,
};
