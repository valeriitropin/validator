import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function isString(options: IsStringOptions = {}): ValidationFunction {
  const {name = 'isString'} = options;

  return async(field: string | number, value: any, args) => {
    if (typeof value === 'string') {
      return value;
    }

    throw new ValidationError(args.format(name, field, {}));
  }
}

export interface IsStringOptions {
  name?: string;
}
