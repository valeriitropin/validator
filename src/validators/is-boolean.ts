import { ValidationError } from '../validation.error';

export async function isBoolean(field: string | number, value: any) {
  if (typeof value === 'boolean') {
    return value;
  }

  throw new ValidationError(`${field} expected to be a boolean.`);
}
