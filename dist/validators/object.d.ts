import { ValidationFunction } from '../types';
export declare function object(rules: {
    [key: string]: ValidationFunction[];
}): ValidationFunction;
