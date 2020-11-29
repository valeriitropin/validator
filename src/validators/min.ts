import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';
import { ValidatorArguments } from '../validator-arguments';

export function min(options: MinOptions): ValidationFunction {
  const {min, name = 'min'} = options;

  return async(field: string | number, value: number, args: ValidatorArguments) => {
    if (value >= min) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {min}));
  }
}

export interface MinOptions {
  min: number;
  name?: string;
}
