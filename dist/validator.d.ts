import { ValidationFunction } from './functions';
export declare class Validator {
    validate(data: {
        [key: string]: any;
    }, rules: {
        [key: string]: ValidationFunction[];
    }): Promise<any>;
}
