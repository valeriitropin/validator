import { ValidationFunction } from '../types';

export function defaultValue(options: DefaultValueOptions): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (value === undefined) {
      return options.value;
    }

    return value;
  }
}

export interface DefaultValueOptions {
  value: any;
}
