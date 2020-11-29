import { FormatterInterface } from './formatters';
export interface ValidatorOptions {
    format?: FormatterInterface;
}
export interface ArrayValidatorOptions {
    minLength?: number;
    maxLength?: number;
}
