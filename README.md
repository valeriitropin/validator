# Validator

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Available validators](#available-validators)
    * [required](#required)
    * [isNumber](#isnumber)
    * [isString](#isstring)
    * [isBoolean](#isboolean)
    * [isArray](#isarray)
    * [isObject](#isobject)
    * [minLength](#minlength)
    * [maxLength](#maxlength)
    * [min](#min)
    * [max](#max)
    * [default](#default)
    * [in](#in)
    * [each](#each)
    * [object](#object)
 * [Creating own validator](#creating-own-validators)

## Installation
TDB

## Usage
```typescript
import { ValidationError, Validator, Validators } from 'tsvalidator';

const data = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
};
const rules = {
  firstName: [
    Validators.required(),
    Validators.isString(),
    Validators.maxLength(20),
  ],
  lastName: [
    Validators.required(),
    Validators.isString(),
    Validators.maxLength(20),
  ],
  age: [
    Validators.required(),
    Validators.isNumber({ integer: true }),
    Validators.min(18),
  ],
  contacts: [
    Validators.required(),
    Validators.isObject,
    Validators.object({
        phone: [
            Validators.required(),
            Validators.isNumber(),
        ],
        skype: [
            Validators.required(),
            Validators.isString(),
            Validators.maxLength(30),
        ],
    }),
  ],
};
const validator = new Validator();
validator.validate(data, rules)
  .then(validatedData => {})
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

### required
```typescript
// Checks if firstName is not empty
{ firstName: [Validators.required()] }
```

### isNumber
```typescript
// Checks if age is a number
{ age: [Validators.isNumber()] }
```

### isString
```typescript
// Checks if firstName is a string
{ firstName: [Validators.isString()] }
```

### isBoolean
```typescript
// Checks if checked is a boolean value
{ checked: [Validators.isBoolean()] }
```

### isArray
```typescript
// Checks if ids is an array
{ ids: [Validators.isArray()] }
```

### isObject
```typescript
// Checks if contacts is an object
{ contacts: [Validators.isObject()] }
```

### minLength
```typescript
{
    // Checks if firstName is longer than 4 characters
    firstName: [Validators.minLength(5)],
    // Checks if ids has at least 1 element
    ids: [Validators.minLength(1)]
}
```

### maxLength
```typescript
{
    // Checks if firstName is no longer than 50 characters
    firstName: [Validators.minLength(50)],
    // Checks if ids has no more than 5 elements
    ids: [Validators.minLength(5)]
}
```

### min
```typescript
// Checks if age is no less than 18
{ age: [Validators.min(18)] }
```

### max
```typescript
// Checks if age is no more than 100
{ age: [Validators.min(100)] }
```

### default
```typescript
// Sets checked false if value is undefined
{ checked: [Validators.default(false)] }
```
`Default` sets value passed as an argument if original value is undefined.

### in
```typescript
// Sets checked false if value is undefined
{ checked: [Validators.default(false)] }
```

### each
```typescript
// Sets checked false if value is undefined
{
    ids: [
        Validators.each([
            Validators.required(),
            Validators.isNumber(),
            Validators.min(1),
        ]),
    ],
}
```
Applies passed rules to each elements of value.

### object
```typescript
// Validate if contacts meets passed rules
{
    contacts: [
        Validators.object({
            phone: [
                Validators.required(),
                Validators.isNumber(),
            ],
            skype: [
                Validators.required(),
                Validators.isString(),
                Validators.maxLength(30),
            ],
        }),
  ],
}
```
Validates object with passed rules.

## Implement own validation function
TBD
