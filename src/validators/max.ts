import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function max(options: MaxOptions): ValidationFunction {
  const {max, name = 'max'} = options;

  return async(field: string | number, value: number, args: ValidatorArguments) => {
    if (value <= max) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {max}));
  }
}

export interface MaxOptions {
  max: number;
  name?: string;
}
