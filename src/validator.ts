import { format, ValidationFunction } from './functions';
import { isObject, object } from './validators';

export class Validator {
  async validate(
    data: { [key: string]: any },
    rules: { [key: string]: ValidationFunction[] },
    options: { format?: (template: string, values: {[key: string]: any}) => string; }
  ): Promise<any> {
    const args = {
      context: data,
      format: options.format || format,
    };
    await isObject()('input', data, args);

    return object(rules)('input', data, args);
  }
}
