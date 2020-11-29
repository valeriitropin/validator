import { ValidationFunction } from '../functions';
export declare function required(options?: RequiredValidatorOptions): ValidationFunction;
export interface RequiredValidatorOptions {
    emptyValues?: any[];
    name?: string;
}
