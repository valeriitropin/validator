export declare function isString(options?: IsStringOptions): (field: string | number, value: any) => Promise<string>;
export interface IsStringOptions {
    message?: string;
}
