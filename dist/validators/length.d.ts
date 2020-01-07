import { ValidationFunction } from '../functions';
export declare function length(options: LengthOptions): ValidationFunction;
export interface LengthOptions {
    length: number;
    message?: string;
}
