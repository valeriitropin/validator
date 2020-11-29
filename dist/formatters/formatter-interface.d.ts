export interface FormatterInterface {
    (validator: string, field: string | number, params: {
        [key: string]: any;
    }): any;
}
