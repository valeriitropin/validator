import { ValidatorArguments } from './validator-arguments';
export declare type ValidationFunction = (field: string | number, value: any, args: ValidatorArguments) => Promise<any>;
export declare function buildChain(field: string | number, value: any, rules: ValidationFunction[], args: ValidatorArguments): Promise<any>;
export declare function resultHandler(result: any, validationErrors: {
    [key: string]: string;
}, errors: Error[]): Promise<any>;
export declare function format(template: string, values: {
    [key: string]: any;
}): string;
