import { ValidationFunction } from '../types';
export declare function required(options?: RequiredValidatorOptions): ValidationFunction;
export interface RequiredValidatorOptions {
    emptyValues?: any[];
    name?: string;
}
