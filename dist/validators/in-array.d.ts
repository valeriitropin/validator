export declare function inArray(options: InArrayOptions): (field: string | number, value: any) => Promise<any>;
export interface InArrayOptions {
    values: any[];
    message?: string;
}
