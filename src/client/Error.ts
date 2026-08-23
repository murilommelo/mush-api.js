export class MushAPIJSError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number, cause?: unknown) {
    super(message, { cause });

    this.name = `MushAPIJSError [${statusCode}]`;
    this.statusCode = statusCode;
  }
}
