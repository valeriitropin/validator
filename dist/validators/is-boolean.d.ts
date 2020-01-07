export declare function isBoolean(options?: IsBooleanOptions): (field: string | number, value: any) => Promise<boolean>;
export interface IsBooleanOptions {
    message?: string;
}
