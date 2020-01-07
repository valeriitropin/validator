import { ValidationFunction } from '../functions';
export declare function maxLength(options: MaxLengthOptions): ValidationFunction;
export interface MaxLengthOptions {
    max: number;
    message?: string;
}
