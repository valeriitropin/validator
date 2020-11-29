import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function minLength(options: MinLengthOptions): ValidationFunction {
  const {min, name = 'minLength'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.length >= min) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {min}));
  }
}

export interface MinLengthOptions {
  min: number;
  name?: string;
}
