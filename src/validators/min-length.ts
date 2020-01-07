import { ValidationError } from '../validation.error';

export function minLength(options: MinLengthOptions) {
  const { min } = options;

  return async(field: string | number, value: string) => {
    if (value.length >= min) {
      return value;
    }
    throw new ValidationError(`${field} must be no shorter than ${min}.`);
  }
}

export interface MinLengthOptions {
  min: number;
}