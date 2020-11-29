import { ValidationFunction } from '../types';
export declare function maxLength(options: MaxLengthOptions): ValidationFunction;
export interface MaxLengthOptions {
    max: number;
    name?: string;
}
