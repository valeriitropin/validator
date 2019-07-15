export declare class ValidationError extends Error {
    messages: string | string[] | {
        [key: string]: string;
    };
    constructor(messages: string | string[] | {
        [key: string]: string;
    });
}
