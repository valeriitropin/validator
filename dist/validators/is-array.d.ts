export declare function isArray(options?: IsArrayOptions): (field: string | number, value: any) => Promise<any[]>;
export interface IsArrayOptions {
    message?: string;
}
