import { array, each, isArray, isObject, maxLength, minLength, object } from './validators';
import { ArrayValidatorOptions, ValidationError, ValidationFunction, ValidatorOptions } from './types';
import { stringFormatter } from './formatters';

export async function validateObject(
  data: {[key: string]: any},
  rules: {[key: string]: ValidationFunction[]},
  options: ValidatorOptions = {}
): Promise<any> {
  const args = {
    context: data,
    format: options.format || stringFormatter(),
  };

  return object({input: [isObject(), object(rules)]})('input', {input: data}, args)
    .then(({input}) => input)
    .catch(errorHandler);
}

export async function validateEach(
  data: any[],
  rules: ValidationFunction[],
  options: ValidatorOptions & ArrayValidatorOptions = {}
) {
  const args = {context: data, format: options.format || stringFormatter()};

  const _rules = [isArray()];
  if (options.minLength) {
    _rules.push(minLength({min: options.minLength}));
  }
  if (options.maxLength) {
    _rules.push(maxLength({max: options.maxLength}));
  }
  _rules.push(each(rules));

  return validateObject({input: data}, {input: _rules}, args)
    .then(({input}) => input)
    .catch(errorHandler);
}

export async function validateArray(data: any[], rules: ValidationFunction[][], options: ValidatorOptions = {}) {
  const args = {context: data, format: options.format || stringFormatter()};

  return validateObject({input: data}, {input: [isArray(), array(rules)]}, args)
    .then(({input}) => input)
    .catch(errorHandler);
}

function errorHandler(error: Error) {
  if (error instanceof ValidationError) {
    throw new ValidationError((error.messages as {[key: string]: string}).input);
  }

  throw error;
}
