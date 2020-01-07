import { ValidationError } from '../validation.error';

export function minLength(min: number) {
  return async(field: string | number, value: string) => {
    if (value.length >= min) {
      return value;
    }
    throw new ValidationError(`${field} must be no shorter than ${min}.`);
  }
}
