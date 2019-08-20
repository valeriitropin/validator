import { ValidationFunction } from './functions';
export declare class Validators {
    static required(options?: RequiredValidatorOptions): ValidationFunction;
    static isNumber(options?: NumberValidatorOptions): Promise<(field: string | number, value: any) => number>;
    static isString(field: string | number, value: any): Promise<string>;
    static isBoolean(field: string | number, value: any): Promise<boolean>;
    static isArray(field: string | number, value: any): Promise<any[]>;
    static isObject(field: string | number, value: any): Promise<any>;
    static len(length: number): (field: string | number, value: string) => Promise<string>;
    static minLength(min: number): (field: string | number, value: string) => Promise<string>;
    static maxLength(max: number): (field: string | number, value: string) => Promise<string>;
    static min(min: number): (field: string | number, value: number) => Promise<number>;
    static max(max: number): (field: string | number, value: number) => Promise<number>;
    static default(defaultValue: any): ValidationFunction;
    static in(values: any[]): (field: string | number, value: any) => Promise<any>;
    static each(rules: ValidationFunction[]): ValidationFunction;
    static object(rules: {
        [key: string]: ValidationFunction[];
    }): ValidationFunction;
}
export interface ValidatorOptions {
}
export interface RequiredValidatorOptions extends ValidatorOptions {
    continueIfEmpty?: boolean;
    stopOnEmpty?: boolean;
    emptyValues?: any[];
}
export interface NumberValidatorOptions extends ValidatorOptions {
    integer?: boolean;
}
