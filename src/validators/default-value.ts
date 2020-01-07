import { ValidationFunction } from '../functions';

export function defaultValue(options: DefaultValueOptions): ValidationFunction {
  const { defaultValue } = options;

  return async(field: string | number, value) => {
    if (value === undefined) {
      return defaultValue;
    }
    return value;
  }
}

export interface DefaultValueOptions {
  defaultValue: any,
}
