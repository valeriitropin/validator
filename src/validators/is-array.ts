import { ValidationError } from '../validation.error';

export async function isArray(field: string | number, value: any) {
  if (Array.isArray(value)) {
    return value;
  }

  throw new ValidationError(`${field} expected to be an array.`);
}
