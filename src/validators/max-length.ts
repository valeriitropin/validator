import { ValidationError } from '../validation.error';

export function maxLength(options: MaxLengthOptions) {
  const { max } = options;

  return async(field: string | number, value: string) => {
    if (value.length <= max) {
      return value;
    }
    throw new ValidationError(`${field} must be no longer than ${max}.`);
  }
}

export interface MaxLengthOptions {
  max: number;
}
