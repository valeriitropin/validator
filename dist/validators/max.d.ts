import { ValidationFunction } from '../functions';
export declare function max(options: MaxOptions): ValidationFunction;
export interface MaxOptions {
    max: number;
    message?: string;
}
