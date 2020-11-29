import { ValidationFunction } from '../types';
export declare function length(options: LengthOptions): ValidationFunction;
export interface LengthOptions {
    length: number;
    name?: string;
}
