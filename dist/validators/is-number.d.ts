import { ValidationFunction } from '../functions';
export declare function isNumber(options?: NumberValidatorOptions): ValidationFunction;
export interface NumberValidatorOptions {
    integer?: boolean;
    message?: string;
    intMessage?: string;
}
