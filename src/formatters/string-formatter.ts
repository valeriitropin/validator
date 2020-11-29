import { FormatterInterface } from './formatter-interface';
import { messages as predefinedMessages } from './data/messages';

export function stringFormatter(messages?: {[key: string]: string}): FormatterInterface {
  const _messages = messages || predefinedMessages;

  return function formatter(validator: string, field: string | number, params: {[key: string]: any}): string {
    let message: string = _messages[validator] || validator;
    params.field = field;
    for (const [key, value] of Object.entries(params)) {
      message = message.split(`{${key}}`).join(value);
    }

    return message;
  }
}
