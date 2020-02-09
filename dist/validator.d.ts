import { ValidationFunction } from './functions';
export declare class Validator {
    validate(data: {
        [key: string]: any;
    }, rules: {
        [key: string]: ValidationFunction[];
    }, options?: {
        format?: (template: string, values: {
            [key: string]: any;
        }) => string;
    }): Promise<any>;
}
