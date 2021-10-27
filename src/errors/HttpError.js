class HttpError {
  constructor({ statusCode, message, response }) {
    this.statusCode = parseInt(statusCode);
    this.message = message;
    this.response = response;
  }
}

export default HttpError;
