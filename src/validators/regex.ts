import { ValidationFunction } from '../functions';
import { ValidationError } from '../validation.error';
import { ValidatorArguments } from '../validator-arguments';

export function regex(options: RegexOptions): ValidationFunction {
  const {pattern, name = 'regex'} = options;

  return async(field: string | number, value: string, args: ValidatorArguments) => {
    if (value.match(pattern)) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {}));
  };
}

export interface RegexOptions {
  pattern: RegExp;
  name?: string;
}
