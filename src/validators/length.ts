import { ValidationError } from '../validation.error';

export function length(length: number) {
  return async(field: string | number, value: string) => {
    if (value.length === length) {
      return value;
    }
    throw new ValidationError(`${field} length must be equal ${length}.`);
  }
}
