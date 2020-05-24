import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function required(options: RequiredValidatorOptions = {}): ValidationFunction {
  const {
    emptyValues = [undefined, null, ''],
    message = '{field} is required.',
  } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (emptyValues.includes(value)) {
      throw new ValidationError(args.format(message, { field }));
    }

    return value;
  };
}

export interface RequiredValidatorOptions {
  emptyValues?: any[];
  message?: string;
}
