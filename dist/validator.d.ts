import { ValidationFunction } from './functions';
import { ValidatorOptions } from './validator-options';
export declare function validateObject(data: {
    [key: string]: any;
}, rules: {
    [key: string]: ValidationFunction[];
}, options?: ValidatorOptions): Promise<any>;
export declare function validateEach(data: any[], rules: ValidationFunction[], options?: ValidatorOptions): Promise<any>;
export declare function validateArray(data: any[], rules: ValidationFunction[][], options?: ValidatorOptions): Promise<any>;
