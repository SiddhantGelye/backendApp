class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.success = success;
    this.statusCode = statusCode < 400;
    this.data = data;
    this.message = message;
  }
}

export { ApiResponse };
