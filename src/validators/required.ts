import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function required(options: RequiredValidatorOptions = {}): ValidationFunction {
  const {emptyValues = [undefined, null, ''], name = 'required'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (emptyValues.includes(value)) {
      throw new ValidationError(args.format(name, field, {}));
    }

    return value;
  };
}

export interface RequiredValidatorOptions {
  emptyValues?: any[];
  name?: string;
}
