# tsvalidated

Validator with the following features:
- async
- extendable with own rules
- supports validation of complex structures including nested objects and arrays
- doesn't modify incoming data
- can catch non-validation errors
- returns only values covered by validators
- supports filters and data modifiers
- customizable error formatting

## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Validation functions](#validation-functions)
    * [validateObject](#validateobject)
    * [validateEach](#validateeach)
    * [validateArray](#validatearray)
 * [Built-in validators and filters](#built-in-validators-and-filters)
    * [array](#array)
    * [defaultValue](#defaultvalue)
    * [each](#each)
    * [equal](#equal)
    * [inArray](#inarray)
    * [isArray](#isarray)
    * [isBoolean](#isboolean)
    * [isNumber](#isnumber)
    * [isObject](#isobject)
    * [isString](#isstring)
    * [length](#length)
    * [max](#max)
    * [maxLength](#maxlength)
    * [min](#min)
    * [minLength](#minlength)
    * [nullable](#nullable)
    * [object](#object)
    * [optional](#optional)
    * [regex](#regex)
    * [required](#required)
 * [Formatters](#formatters)
    * [objectFormatter](#objectformatter)
    * [stringFormatter](#stringformatter)
    * [Custom formatter](#custom-formatter)
 * [Creating own validator](#creating-own-validator)

## Installation
`npm i --save tsvalidated`

## Usage
```typescript
import {
  ValidationError,
  validateObject,
  required,
  isString,
  maxLength,
  isNumber,
  min,
  isObject,
  object,
  optional
} from 'tsvalidator';

const data = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
};
const rules = {
  firstName: [
    required(),
    isString(),
    maxLength({max: 20}),
  ],
  lastName: [
    required(),
    isString(),
    maxLength({max: 20}),
  ],
  age: [
    required(),
    isNumber({integer: true}),
    min({min: 18}),
  ],
  contacts: [
    required(),
    isObject(),
    object({
      phone: [
        required(),
        isNumber(),
      ],
      skype: [
        optional(),
        isString(),
        maxLength({max: 30}),
      ],
    }),
  ],
};

validateObject(data, rules)
  .then(validatedData => console.log(validatedData))
  .catch(error => {
    if (error instanceof ValidationError) {
      // Handle validation errors
      const messages = error.messages;
      return;
    }
    // Handle any other error
  });
```

## Validation functions

### validateObject
Checks if passed value is an object and validates value with rules.
```typescript
import { isNumber, isString, maxLength, optional, required, validateObject } from 'tsvalidator';

const rules = {
  firstName: [required(), isString(), maxLength({max: 50})],
  lastName: [required(), isString(), maxLength({max: 50})],
  age: [required(), isNumber({integer: true})],
  nickname: [optional(), isString(), maxLength({max: 16})],
};

const data = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
};

validateObject(data, rules)
  .then(validatedData => console.log(validatedData)); // {age: 21, firstName: 'John', lastName: 'Doe'}
```

### validateEach
Checks if passed value is an array and validates each element with rules. You may also restrict array min and max length.
```typescript
import { isNumber, isObject, isString, maxLength, object, optional, required, validateEach, ValidationError } from 'tsvalidator';

const rules = [
  isObject(),
  object({
    name: [required(), isString(), maxLength({max: 50})],
    age: [optional(), isNumber({integer: true})],
  }),
];

const data = [
  {name: 'John', age: 21},
  {name: 'Peter'},
];

validateEach(data, rules)
  .then(validatedData => console.log(validatedData)); // [{age: 21, name: 'John'}, {name: 'Peter'}]

validateEach(data, rules, {minLength: 1})
  .then(validatedData => console.log(validatedData)); // [{age: 21, name: 'John'}, {name: 'Peter'}]
```

### validateArray
Checks if passed value is an array and validates each element with specific rules.
```typescript
import { isBoolean, isNumber, isObject, isString, maxLength, min, object, required, validateArray } from 'tsvalidator';

const rules = [
  [required(), isBoolean()],
  [
    required(),
    isObject(),
    object({
      name: [required(), isString(), maxLength({max: 50})],
      age: [required(), isNumber(), min({min: 18})],
    }),
  ],
];
const data = [
  false,
  {
    name: 'John',
    age: 21,
  },
];

validateArray(data, rules).then(validatedData => console.log(validatedData)); // [false, {name: 'John', age: 21}]
```

## Built-in validators and filters

### array
```typescript
{
  arr: [
    required(),
    array([
      [required(), isNumber({ integer: true })],
      [required(), isString(), maxLength({max: 50})],
    ]),
  ],
}
```
Validates elements of array with specific set of rules for each element.

### defaultValue
```typescript
{
  checked: [
    defaultValue({value: true}),
  ],
}
```
Sets `value` if original value is undefined.

### each
```typescript
{
  ids: [
    each([
      required(),
      isNumber(),
      min({min: 1}),
    ]),
  ],
}
```
Applies passed rules to each element of value.

### Equal
```typescript
const rules = {
   password: [required(), isString()],
   passwordConfirmation: [equal({compareField: 'password'})],
};

const _rules = {
   password: [required(), isString()],
   passwordConfirmation: [equal({compareValue: 'password'})],
};
```
Checks if input value is strictly equal to object property or compare value. 

### inArray
```typescript
{
  checked: [
    inArray({values: [0, 1]}),
  ],
}
```
Checks if passed value is in `values`.

### isArray
```typescript
{
  ids: [
    isArray(),
  ],
}
```
Checks if value is an array.

### isBoolean
```typescript
{
  checked: [
    isBoolean(),
  ],
}
```
Checks if value is boolean value.

### isNumber
```typescript
{
  age: [
    isNumber(),
  ],
}
```
Checks if value is a number. You may check if number is integer passing `integer: true` via options. 

### isObject
```typescript
{
  contacts: [
    isObject(),
  ],
}
```
Checks if value is an object.

### isString
```typescript
{
  firstName: [
    isString(),
  ],
}
```
Check is value is a string.

### length
```typescript
{
  firstName: [
    length({length: 10}),
  ],
}
```
Checks if value has length equal passed `length`.

### max
```typescript
// Checks if age is no more than 100
{
  age: [
    max({max: 100}),
  ],
}
```
Checks if value is no greater then `max`.

### maxLength
```typescript
{
  // Checks if firstName is no longer than 50 characters
  firstName: [
    maxLength({max: 50}),
  ],
  // Checks if array of ids has no more than 5 elements
  ids: [
    maxLength({max: 5}),
  ],
}
```
Checks if value (must be an array of a string) has length no greater than `max`.

### min
```typescript
// Checks if age is no less than 18
{
  age: [
    min({min: 18}),
  ],
}
```
Checks if value no less then `min`.

### minLength
```typescript
{
  // firstName must be no shorter than 4 characters
  firstName: [
    minLength({min: 5}),
  ],
  // ids must have at least 1 element
  ids: [
    minLength({min: 1}),
  ],
}
```
Checks if value (must be an array of a string) has length no less than `min`.

### nullable
```typescript
{
  phoneNumber: [
    nullable(),
    isString(),
    maxLength({max: 20}),
  ],
}
```
Checks if passed value is `null`. In positive case it stops validation chain and set `null` for this field into result otherwise continue validation.

### object
```typescript
{
  contacts: [
    object({
      phone: [
        required(),
        isNumber(),
      ],
      skype: [
        required(),
        isString(),
        maxLength({max: 30}),
      ],
    }),
  ],
}
```
Validates an object with passed rules.

### optional
```typescript
{
  age: [
    optional(),
    isNumber({ integer: true }),
    min({ min: 18 }),
  ],
}
```
Stops validation chain if value is `undefined`.

### regex
```typescript
{
  email: [
    required(),
    regex({pattern: /^\S+@\S+$/}),
  ],
}
```
Checks if passed value matches a regular expression.

### required
```typescript
{
  firstName: [
    required(),
  ],
}
```
Checks if value is not empty. `undefined`, `null` and `''` are considered as empty values by default.

## Formatters
Formatters are function and used to provide error messages in different formats. This library provides two formatters out of the box:
`objectFormatter` and `stringFormatter`. `stringFormatter` is used by default.

### objectFormatter
Converts errors into an object: `{validatorName: {param1: value1, ...}}`. Names and values of params depend on validator. 

### stringFormatter
Formats an error as string. Is used by default.

### Custom formatter
If you need to get errors in your own format you may implement you own formatter. Your formatter must have the following
interface `(validator: string, field: string | number, params: {[key: string]: any}): any;`, see `FormatterInterface`.

### Formatters usage
All validation functions allow you to change default formatter:
```
import { isNumber, isString, maxLength, optional, required, validateObject, objectFormatter, min } from 'tsvalidator';

const rules = {
  name: [required(), isString(), maxLength({max: 50})],
  age: [required(), isNumber({integer: true}), min({min: 50})],
  nickname: [optional(), isString(), maxLength({max: 16})],
};
const data = {
  age: 21
};

validateObject(data, rules)
  .catch(({messages}) => console.log(messages)); // {name: 'name is required.', age: 'age must be a number.'}

validateObject(data, rules, {format: objectFormatter})
  .catch(({messages}) => console.log(messages)); // {name: {required: {}}, age: {min: { min: 50 }}}
```

## Creating own validator
Validator is a function which must have the following interface:
```typescript
(field: string | number, value: any, args: ValidatorArguments) => Promise<any>
```
Validation function must return promise resolved with validated value if validation passes or throw `ValidationError` otherwise.
To stop validation chain you may throw any value. If thrown value is not equal `undefined` this value will be added into result.

Let's implement validator which check if number is divided by integer number without remainder:
```typescript
function isDividedBy(options: IsDividedByOption): ValidationFunction {
  const {divider, name = ''} = options;

  return async (field: string | number, value: any, args: ValidatorArguments) => {
    if (value % divider === 0) {
      return value;
    }

    throw new ValidationError(args.format(name, field, {divider}));
  }
}
```

`isDividedBy` wrapper function is unnecessary in common case and is used here only to pass additional options.

Also, you may implement something like filter or modifier:
```typescript
async function trim(field: string | number, value: any, args: ValidatorArguments) {
  return value.trim();
}

async function toLowerCase(field: string | number, value: any, args: ValidatorArguments) {
  return value.toLowerCase();
}
```
