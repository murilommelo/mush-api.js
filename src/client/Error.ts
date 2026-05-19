export class MushAPIJSError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number, options: ErrorOptions = {}) {
    super(message, options);

    this.name = `MushAPIJSError [${statusCode}]`;
    this.statusCode = statusCode;
  }
}
