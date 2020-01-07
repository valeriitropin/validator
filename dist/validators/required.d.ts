import { ValidationFunction } from '../functions';
export declare function required(options?: RequiredValidatorOptions): ValidationFunction;
export interface RequiredValidatorOptions {
    continueIfEmpty?: boolean;
    stopOnEmpty?: boolean;
    emptyValues?: any[];
}
