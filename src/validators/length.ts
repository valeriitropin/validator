import { ValidationError } from '../validation.error';

export function length(options: LengthOptions) {
  const { length } = options;

  return async(field: string | number, value: string) => {
    if (value.length === length) {
      return value;
    }
    throw new ValidationError(`${field} length must be equal ${length}.`);
  }
}

export interface LengthOptions {
  length: number;
}
