import { ValidationError } from '../validation.error';

export function max(max: number) {
  return async(field: string | number, value: number) => {
    if (value <= max) {
      return value;
    }
    throw new ValidationError(`${field} must be no greater than ${max}.`);
  }
}
