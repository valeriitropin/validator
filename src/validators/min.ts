import { ValidationError } from '../validation.error';
import { ValidationFunction } from '../functions';

export function min(options: MinOptions): ValidationFunction {
  const { min, message } = options;

  return async(field: string | number, value: number) => {
    if (value >= min) {
      return value;
    }

    const _message = message || `${field} must be no less than ${min}.`;
    throw new ValidationError(_message);
  }
}

export interface MinOptions {
  min: number;
  message?: string;
}