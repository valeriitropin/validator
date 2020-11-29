"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../data/messages");
function stringFormatter(messages) {
    const _messages = messages || messages_1.messages;
    return function formatter(validator, field, params) {
        let message = _messages[validator] || validator;
        params.field = field;
        for (const [key, value] of Object.entries(params)) {
            message = message.split(`{${key}}`).join(value);
        }
        return message;
    };
}
exports.stringFormatter = stringFormatter;
//# sourceMappingURL=string-formatter.js.map