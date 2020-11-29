import { ValidationFunction } from '../types';
export declare function min(options: MinOptions): ValidationFunction;
export interface MinOptions {
    min: number;
    name?: string;
}
