import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function isBoolean(options: IsBooleanOptions = {}): ValidationFunction {
  const { message = '{field} expected to be a boolean.' } = options;

  return async(field: string | number, value: any) => {
    if (typeof value === 'boolean') {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  }
}

export interface IsBooleanOptions {
  message?: string;
}
