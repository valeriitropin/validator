export declare function max(options: MaxOptions): (field: string | number, value: number) => Promise<number>;
export interface MaxOptions {
    max: number;
}
