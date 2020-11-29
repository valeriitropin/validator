import { ValidationFunction } from '../types';

export function defaultValue(options: DefaultValueOptions): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (value === undefined) {
      return options.defaultValue;
    }

    return value;
  }
}

export interface DefaultValueOptions {
  defaultValue: any;
}
