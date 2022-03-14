import axios from "axios";

axios.interceptors.response.use(null, (exception) => {
  const expected =
    exception.response &&
    exception.response.status >= 400 &&
    exception.response.status < 500;

  if (!expected) {
    // handle unexpected errors
    console.log(exception.response);
  }

  return Promise.reject(exception);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
};
