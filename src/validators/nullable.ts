import { ValidationFunction } from '../types';

export function nullable(): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (value === null) {
      throw value;
    }

    return value;
  }
}
