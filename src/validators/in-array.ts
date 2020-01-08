import { ValidationError } from '../validation.error';
import { format, ValidationFunction } from '../functions';

export function inArray(options: InArrayOptions): ValidationFunction {
  const {
    values,
    message = '{field} is invalid.',
  } = options;

  return async(field: string | number, value: any) => {
    if (values.includes(value)) {
      return value;
    }

    throw new ValidationError(format(message, { field }));
  }
}

export interface InArrayOptions {
  values: any[];
  message?: string;
}
