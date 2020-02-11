# Validator

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Available validators](#available-validators)
    * [defaultValue](#defaultvalue)
    * [each](#each)
    * [inArray](#inarray)
    * [isArray](#isarray)
    * [isBoolean](#isboolean)
    * [isNumber](#isnumber)
    * [isObject](#isobject)
    * [isString](#isstring)
    * [length](#length)
    * [min](#min)
    * [minLength](#minlength)
    * [max](#max)
    * [maxLength](#maxlength)
    * [object](#object)
    * [required](#required)
 * [Creating own validator](#creating-own-validators)

## Installation
`npm i --save tsvalidator`

## Usage
```typescript
import {
  ValidationError,
  Validator,
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
const validator = new Validator();
validator.validate(data, rules)
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

## Available validators

### defaultValue
```typescript
{ checked: [defaultValue({ defaultValue: false })] }
```
`defaultValue` sets value `defaultValue` if original value is undefined.

### each
```typescript
{
  ids: [
    each([
      required(),
      isNumber(),
      min({ min: 1 }),
    ]),
  ],
}
```
Applies passed rules to each elements of value.

### inArray
```typescript
{ checked: [inArray({ values: [0, 1]})] }
```
Checks if passed value is in `values`.

### isArray
```typescript
{ ids: [isArray()] }
```
Checks if value is an array.

### isBoolean
```typescript
{ checked: [isBoolean()] }
```
Checks if value is boolean value.

### isNumber
```typescript
{ age: [isNumber()] }
```
Checks if value is a number.

### isObject
```typescript
{ contacts: [isObject()] }
```
Checks if value is an object

### isString
```typescript
{ firstName: [isString()] }
```
Check is value is a string.

### length
```typescript
{ firstName: [length({ length: 10 })] }
```
Checks if value has length equal passed `length`.

### min
```typescript
// Checks if age is no less than 18
{ age: [min({ min: 18 })] }
```
Checks if value no less then `min`.

### minLength
```typescript
{
    // firstName must be no shorter than 4 characters
    firstName: [minLength({ min: 5 })],
    // ids must have at least 1 element
    ids: [minLength({ min: 1 })]
}
```
Checks if value (must be an array of a string) has length no less than `min`.

### max
```typescript
// Checks if age is no more than 100
{ age: [max({ max: 100 })] }
```
Checks if value is no greater then `max`.

### maxLength
```typescript
{
    // Checks if firstName is no longer than 50 characters
    firstName: [maxLength({ max: 50 })],
    // Checks if ids has no more than 5 elements
    ids: [maxLength({ max: 5 })]
}
```
Checks if value (must be an array of a string) has length no greater than `max`.

### object
```typescript
  contacts: [
    object({
      phone: [
        required(),
        isNumber(),
      ],
      skype: [
        required(),
        isString(),
        maxLength(30),
      ],
    }),
  ],
}
```
Validates object with passed rules.

### required
```typescript
{ firstName: [required()] }
```
Checks if value is not empty. `undefined`, `null` and `''` are considered as empty values by default.

## Implement own validation function
TBD
