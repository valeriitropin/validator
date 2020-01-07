import { ValidationError } from '../validation.error';

export function maxLength(max: number) {
  return async(field: string | number, value: string) => {
    if (value.length <= max) {
      return value;
    }
    throw new ValidationError(`${field} must be no longer than ${max}.`);
  }
}
