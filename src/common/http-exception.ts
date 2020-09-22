/**
 * Helper class for encapsulating errors related to HTTP requests
 */
export default class HttpException extends Error {
  /**
   * @param {number} statusCode Error status code
   * @param {string} message Error message
   * @param {string} error Specific error if any
   */
  constructor(statusCode: number, message: string, error?: string) {
    super(message);
  }
}
