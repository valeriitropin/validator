export declare function maxLength(options: MaxLengthOptions): (field: string | number, value: string) => Promise<string>;
export interface MaxLengthOptions {
    max: number;
    message?: string;
}
