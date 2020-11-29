import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function isBoolean(options: IsBooleanOptions = {}): ValidationFunction {
  const {name = 'isBoolean'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (typeof value === 'boolean') {
      return value;
    }

    throw new ValidationError(args.format(name, field, {}));
  }
}

export interface IsBooleanOptions {
  name?: string;
}
