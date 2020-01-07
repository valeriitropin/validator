import { ValidationError } from '../validation.error';

export function inArray(options: InArrayOptions) {
  const { values } = options;

  return async(field: string | number, value: any) => {
    if (values.includes(value)) {
      return value;
    }
    throw new ValidationError(`${field} is not in ${values}.`);
  }
}

export interface InArrayOptions {
  values: any[];
}
