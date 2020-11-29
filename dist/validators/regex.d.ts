import { ValidationFunction } from '../types';
export declare function regex(options: RegexOptions): ValidationFunction;
export interface RegexOptions {
    pattern: RegExp;
    name?: string;
}
