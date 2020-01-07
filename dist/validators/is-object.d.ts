export declare function isObject(options?: IsObjectOptions): (field: string | number, value: any) => Promise<any>;
export interface IsObjectOptions {
    message?: string;
}
