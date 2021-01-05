import { FormatterInterface } from '../formatters';

export interface ValidatorOptions {
  format?: FormatterInterface;
  label?: string;
}

export interface ArrayValidatorOptions {
  minLength?: number;
  maxLength?: number;
}

export interface ObjectValidatorOptions {
  labels?: {[key: string]: string};
}
