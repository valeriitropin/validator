import { ValidationError } from '../validation.error';

export async function isObject(field: string | number, value: any) {
  if (value !== null && !Array.isArray(value) && typeof value === 'object') {
    return value;
  }
  throw new ValidationError(`${field} expected to be an object.`);
}
