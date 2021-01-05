import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function min(options: MinOptions): ValidationFunction {
  const {min, name = 'min'} = options;

  return async(field: string | number, value: number, args: ValidatorArguments) => {
    if (value >= min) {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {min}));
  }
}

export interface MinOptions {
  min: number;
  name?: string;
}
