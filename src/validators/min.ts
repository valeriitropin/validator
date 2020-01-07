import { ValidationError } from '../validation.error';

export function min(options: MinOptions) {
  const { min } = options;

  return async(field: string | number, value: number) => {
    if (value >= min) {
      return value;
    }
    throw new ValidationError(`${field} must be no less than ${min}.`);
  }
}

export interface MinOptions {
  min: number;
}