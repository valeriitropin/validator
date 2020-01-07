import { ValidationError } from '../validation.error';

export function inArray(values: any[]) {
  return async(field: string | number, value: any) => {
    if (values.includes(value)) {
      return value;
    }
    throw new ValidationError(`${field} is not in ${values}.`);
  }
}
