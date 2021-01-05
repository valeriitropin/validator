import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function required(options: RequiredValidatorOptions = {}): ValidationFunction {
  const {emptyValues = [undefined, null, ''], name = 'required'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (emptyValues.includes(value)) {
      throw new ValidationError(args.format(name, args.label || field, {}));
    }

    return value;
  };
}

export interface RequiredValidatorOptions {
  emptyValues?: any[];
  name?: string;
}
