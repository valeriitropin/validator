export declare function min(options: MinOptions): (field: string | number, value: number) => Promise<number>;
export interface MinOptions {
    min: number;
    message?: string;
}
