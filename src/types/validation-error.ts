export class ValidationError extends Error {
  constructor(public messages: string | string[] | { [key: string]: string }) {
    super();
  }
}
