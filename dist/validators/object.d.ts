import { ValidationFunction } from '../functions';
export declare function object(rules: {
    [key: string]: ValidationFunction[];
}): ValidationFunction;
