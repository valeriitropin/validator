import { ValidationFunction } from '../types';
export declare function minLength(options: MinLengthOptions): ValidationFunction;
export interface MinLengthOptions {
    min: number;
    name?: string;
}
