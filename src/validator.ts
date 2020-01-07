import { ValidationFunction } from './functions';
import { isObject, object } from './validators';

export class Validator {
  async validate(data: { [key: string]: any }, rules: { [key: string]: ValidationFunction[] }): Promise<any> {
    await isObject()('input', data);
    return object(rules)('input', data, {context: data});
  }
}
