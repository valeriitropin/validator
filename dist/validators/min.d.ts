import { ValidationFunction } from '../functions';
export declare function min(options: MinOptions): ValidationFunction;
export interface MinOptions {
    min: number;
    message?: string;
}
