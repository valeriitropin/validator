import { array, each, isArray, isObject, maxLength, minLength, object } from './validators';
import {
  ArrayValidatorOptions,
  ObjectValidatorOptions,
  ValidationError,
  ValidationFunction,
  ValidatorOptions
} from './types';
import { stringFormatter } from './formatters';

export async function validateObject(
  data: {[key: string]: any},
  rules: {[key: string]: ValidationFunction[]},
  options: ValidatorOptions & ObjectValidatorOptions = {}
): Promise<any> {
  const {format, label, labels = {}} = options;
  const args = {context: data, format: format || stringFormatter()};

  return object(
    {input: [isObject(), object(rules, {labels})]},
    {labels: label ? {input: label} : {}},
  )('input', {input: data}, args)
    .then(({input}) => input)
    .catch(errorHandler);
}

export async function validateEach(
  data: any[],
  rules: ValidationFunction[],
  options: ValidatorOptions & ArrayValidatorOptions = {}
) {
  const {format, label, maxLength: max, minLength: min} = options;
  const args = {
    context: data,
    format: format || stringFormatter(),
    label,
  };

  const _rules = [isArray()];
  if (min) {
    _rules.push(minLength({min}));
  }
  if (max) {
    _rules.push(maxLength({max}));
  }
  _rules.push(each(rules));

  return validateObject({input: data}, {input: _rules}, args)
    .then(({input}) => input)
    .catch(errorHandler);
}

export async function validateArray(data: any[], rules: ValidationFunction[][], options: ValidatorOptions = {}) {
  const {format, label} = options;
  const args = {
    context: data,
    format: format || stringFormatter(),
    label,
  };

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
