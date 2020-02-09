export interface ValidatorArguments {
    format: (template: string, values: {
        [key: string]: any;
    }) => any;
    context?: any;
}
