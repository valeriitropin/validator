import { ValidationFunction } from '../types';
export declare function max(options: MaxOptions): ValidationFunction;
export interface MaxOptions {
    max: number;
    name?: string;
}
