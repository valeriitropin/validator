import { ValidationError } from './validation.error';
export declare type ValidationFunction = (field: string | number, value: any, args?: any) => Promise<any>;
export declare function buildChain(field: string | number, value: any, rules: ValidationFunction[], args?: any): Promise<any>;
export declare function resultHandler(result: any, validationErrors: {
    [key: string]: ValidationError;
}, errors: Error[]): Promise<any>;
