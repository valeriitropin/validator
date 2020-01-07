import { ValidationFunction } from '../functions';

export function defaultValue(options: DefaultValueOptions): ValidationFunction {
  return async(field: string | number, value) => {
    if (value === undefined) {
      return options.defaultValue;
    }

    return value;
  }
}

export interface DefaultValueOptions {
  defaultValue: any;
}
