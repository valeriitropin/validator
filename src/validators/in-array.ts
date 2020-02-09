import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function inArray(options: InArrayOptions): ValidationFunction {
  const {
    values,
    message = '{field} is invalid.',
  } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (values.includes(value)) {
      return value;
    }

    throw new ValidationError(args.format(message, { field }));
  }
}

export interface InArrayOptions {
  values: any[];
  message?: string;
}
