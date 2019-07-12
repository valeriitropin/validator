import { ValidationFunction } from './functions';
export declare class Validators {
    static required(continueIfEmpty?: boolean, breakOnEmpty?: boolean, emptyValues?: any[]): ValidationFunction;
    static isNumber(field: string | number, value: any): Promise<number>;
    static isString(field: string | number, value: any): Promise<string>;
    static isBoolean(field: string | number, value: any): Promise<boolean>;
    static isArray(field: string | number, value: any): Promise<any[]>;
    static isObject(field: string, value: any): Promise<any>;
    static minLength(min: number): (field: string, value: string) => Promise<string>;
    static maxLength(max: number): (field: string, value: string) => Promise<string>;
    static min(min: number): (field: string, value: number) => Promise<number>;
    static max(max: number): (field: string, value: number) => Promise<number>;
    static default(defaultValue: any): ValidationFunction;
    static in(values: any[]): (field: string, value: any) => Promise<any>;
    static each(rules: ValidationFunction[]): ValidationFunction;
    static object(rules: {
        [key: string]: ValidationFunction[];
    }): ValidationFunction;
}
