import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function required(options: RequiredValidatorOptions = {}): ValidationFunction {
  const {
    continueIfEmpty = false,
    stopOnEmpty = false,
    emptyValues = [undefined, null, ''],
    message = '{field} is required.',
  } = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    const isEmpty = emptyValues.includes(value);
    if (isEmpty && stopOnEmpty) {
      throw undefined;
    }

    if (isEmpty && !continueIfEmpty) {
      throw new ValidationError(args.format(message, { field }));
    }

    return value;
  };
}

export interface RequiredValidatorOptions {
  continueIfEmpty?: boolean;
  stopOnEmpty?: boolean;
  emptyValues?: any[];
  message?: string;
}
