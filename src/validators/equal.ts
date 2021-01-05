import { ValidationError, ValidationFunction, ValidatorArguments, ValidatorConfigError } from '../types';

export function equal(options: EqualOptions = {}): ValidationFunction {
  const { compareValue, compareField, name = 'equal'} = options;

  if (compareValue === undefined && compareField === undefined) {
    throw new ValidatorConfigError('Compare value of compare field is required');
  }

  return async (field: string | number, value: any, args: ValidatorArguments) => {
    const _compareValue = compareField ? args.context[compareField] : compareValue;
    const compareFieldOrValue = compareField || _compareValue;

    if (value === _compareValue) {
      return value;
    }

    throw new ValidationError(args.format(name, args.label || field, {comparableValue: compareFieldOrValue}));
  };
}

export interface EqualOptions {
  name?: string;
  compareValue?: any;
  compareField?: string;
}