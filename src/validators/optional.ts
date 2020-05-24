import { ValidationFunction } from '../functions';

export function optional(): ValidationFunction {
  return async(field: string | number, value: any) => {
    if (value === undefined) {
      throw undefined;
    }

    return value;
  }
}
