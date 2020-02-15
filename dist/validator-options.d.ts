export interface ValidatorOptions {
    format?: (template: string, values: {
        [key: string]: any;
    }) => string;
}
