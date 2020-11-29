"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor(messages) {
        super();
        this.messages = messages;
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=validation-error.js.map