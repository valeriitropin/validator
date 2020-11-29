import { ValidationFunction } from '../types';
export declare function isNumber(options?: NumberValidatorOptions): ValidationFunction;
export interface NumberValidatorOptions {
    name?: string;
    integer?: boolean;
}
