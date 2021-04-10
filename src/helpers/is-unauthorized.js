export default (error) => {
  return error.request instanceof XMLHttpRequest &&
  error.response &&
  error.response.status === 401
}