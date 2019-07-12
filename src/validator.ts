import { ValidationFunction } from './functions';
import { Validators } from './validators';

export class Validator {
  async validate(data: { [key: string]: any }, rules: { [key: string]: ValidationFunction[] }): Promise<any> {
    await Validators.isObject('input', data);
    return Validators.object(rules)('input', data, {context: data});
  }
}
