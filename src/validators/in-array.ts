import { ValidationError } from '../validation.error';

export function inArray(options: InArrayOptions) {
  const { values, message } = options;

  return async(field: string | number, value: any) => {
    if (values.includes(value)) {
      return value;
    }

    const _message = message || `${field} is not in ${values}.`;
    throw new ValidationError(_message);
  }
}

export interface InArrayOptions {
  values: any[];
  message?: string;
}
