import { format, ValidationFunction } from './functions';
import { array, each, isArray, isObject, object } from './validators';
import { ValidatorOptions } from './validator-options';

export async function validateObject(
  data: { [key: string]: any },
  rules: { [key: string]: ValidationFunction[] },
  options: ValidatorOptions = {}
): Promise<any> {
  const args = {
    context: data,
    format: options.format || format,
  };

  isObject()('input', data, args);

  return object(rules)('input', data, args);
}

export async function validateEach(
  data: any[],
  rules: ValidationFunction[],
  options: ValidatorOptions = {}
) {
  const args = {
    context: data,
    format: options.format || format,
  };
  await isArray()('input', data, args);

  return each(rules)('input', data, args);
}

export async function validateArray(
  data: any[],
  rules: ValidationFunction[][],
  options: ValidatorOptions = {}
) {
  const args = {
    context: data,
    format: options.format || format,
  };

  await isArray()('input', data, args);

  return array(rules)('input', data, args);
}
