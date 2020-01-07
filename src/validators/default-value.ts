import { ValidationFunction } from '../functions';

export function defaultValue(defaultValue: any): ValidationFunction {
  return async(field: string | number, value) => {
    if (value === undefined) {
      return defaultValue;
    }
    return value;
  }
}
