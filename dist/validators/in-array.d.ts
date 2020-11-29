import { ValidationFunction } from '../functions';
export declare function inArray(options: InArrayOptions): ValidationFunction;
export interface InArrayOptions {
    name?: string;
    values: any[];
}
