import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';

export function required(options: RequiredValidatorOptions = {}): ValidationFunction {
  const {
    continueIfEmpty = false,
    stopOnEmpty = false,
    emptyValues = [undefined, null, ''],
  } = options;

  return async(field: string | number, value: any) => {
    const isEmpty = emptyValues.includes(value);
    if (isEmpty && stopOnEmpty) {
      throw undefined;
    }
    if (isEmpty && !continueIfEmpty) {
      throw new ValidationError(`${field} is required.`);
    }

    return value;
  };
}

export interface RequiredValidatorOptions {
  continueIfEmpty?: boolean;
  stopOnEmpty?: boolean;
  emptyValues?: any[];
}
