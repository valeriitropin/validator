export declare function length(options: LengthOptions): (field: string | number, value: string) => Promise<string>;
export interface LengthOptions {
    length: number;
    message?: string;
}
