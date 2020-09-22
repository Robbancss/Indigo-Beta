/**
 * Helper class for encapsulating errors related to HTTP requests
 */
export default class HttpException extends Error {
  statusCode: number;
  message: string;
  error: string | null;
  /**
   * @param {number} statusCode Error status code
   * @param {string} message Error message
   * @param {string} error Specific error if any
   */
  constructor(statusCode: number, message: string, error?: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
