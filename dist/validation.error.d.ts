export declare class ValidationError extends Error {
    messages: string | string[] | {
        [key: string]: ValidationError;
    };
    constructor(messages: string | string[] | {
        [key: string]: ValidationError;
    });
}
