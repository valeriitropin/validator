import { ValidatorArguments } from './validator-arguments';
export declare type ValidationFunction = (field: string | number, value: any, args: ValidatorArguments) => Promise<any>;
