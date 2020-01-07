import { ValidationError } from '../validation.error';

export function max(options: MaxOptions) {
  const { max } = options;

  return async(field: string | number, value: number) => {
    if (value <= max) {
      return value;
    }
    throw new ValidationError(`${field} must be no greater than ${max}.`);
  }
}

export interface MaxOptions {
  max: number;
}