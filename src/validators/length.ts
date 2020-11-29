import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function length(options: LengthOptions): ValidationFunction {
  const {length, name = 'length'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length === length) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {length}));
  }
}

export interface LengthOptions {
  length: number;
  name?: string;
}
