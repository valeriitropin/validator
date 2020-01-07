import { ValidationFunction } from '../functions';
export declare function inArray(options: InArrayOptions): ValidationFunction;
export interface InArrayOptions {
    values: any[];
    message?: string;
}
