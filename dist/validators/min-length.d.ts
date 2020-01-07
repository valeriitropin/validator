export declare function minLength(options: MinLengthOptions): (field: string | number, value: string) => Promise<string>;
export interface MinLengthOptions {
    min: number;
}
