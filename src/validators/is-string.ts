import { ValidationError } from '../validation.error';

export async function isString(field: string | number, value: any) {
  if (typeof value === 'string') {
    return value;
  }
  throw new ValidationError(`${field} expected to be a string.`);
}
