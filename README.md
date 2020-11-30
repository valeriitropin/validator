# Validator
Simple validator with the following features:
- supports async validation
- easily extendable with own rules
- supports validation of complex structures including nested objects and arrays
- doesn't modify incoming data
- can catch non-validation errors
- returns only values covered by validators
- support filters and data modifiers

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Validation functions](#validation-functions)
 * [Available validators](#available-validators)
    * [array](#array)
    * [defaultValue](#defaultvalue)
    * [each](#each)
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
 * [Implement own validator](#implement-own-validator)

## Installation
`npm i --save tsvalidator`

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
  object
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
    maxLength({ max: 20 }),
  ],
  lastName: [
    required(),
    isString(),
    maxLength({ max: 20 }),
  ],
  age: [
    required(),
    isNumber({ integer: true }),
    min({ min: 18 }),
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
        required(),
        isString(),
        maxLength({ max: 30 }),
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
TBD

## Available validators

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
TBD

## Implement own validator
Validation function is simple function which must have the following interface:
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

`isDividedBy` wrapper function is unnecessary and is used only to pass additional options.

Also, you may implement something like filter:
```typescript
async function trim(field: string | number, value: any, args: ValidatorArguments) {
  return value.trim();
}
```