import { ValidatorArguments, ValidationError, ValidationFunction } from '../types';

export function regex(options: RegexOptions): ValidationFunction {
  const {pattern, name = 'regex'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.match(pattern)) {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {}));
  };
}

export interface RegexOptions {
  pattern: RegExp;
  name?: string;
}
