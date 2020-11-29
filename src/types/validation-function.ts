import { ValidatorArguments } from './validator-arguments';

export type ValidationFunction = (field: string | number, value: any, args: ValidatorArguments) => Promise<any>;
