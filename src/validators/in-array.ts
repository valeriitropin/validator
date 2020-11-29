import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function inArray(options: InArrayOptions): ValidationFunction {
  const {values, name = 'inArray'} = options;

  return async(field: string | number, value: any, args: ValidatorArguments) => {
    if (values.includes(value)) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {}));
  }
}

export interface InArrayOptions {
  name?: string;
  values: any[];
}
