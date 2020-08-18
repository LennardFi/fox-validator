# fox-validator

A value validation library with a jest like api.

## Usage

```ts
import { StringValidator } from "fox-validator"

// Define custom validator
const isMail = new StringValidator().match(/\w+@\w+\.\w+/).seal()

// Use validator
isMail("abc") // false
isMail("foo@example.com") // true
```

## API

The library provides several validator generators. These generators are
available:

- `AnyValidator`: Returns `true` for every given value.
- `ArrayValidator`: Validates array objects and their contained elements.
- `BooleanValidator`: Checks a given value for be type of boolean and provides
  methods to ensure the value of the boolean (`true` or `false`).
- `FunctionValidator`: Ensures the given value is a function. It also provides a
  method to validate the argument length of the given function.
- `NullValidator`: Returns `true` if the value is equal to `null`.
- `NumberValidator`: Ensures a given value is a number. This generator also
  provides methods e.g. to ensures the number is an int or a float. Furthermore
  there are methods to ensure the given number is equal or not equal to one or
  multiple possible values.
- `ObjectValidator`: A validator generator to check objects and their
  properties.
- `StringValidator`: This generator ensures a given value is a string. The
  generator also provides methods to check the string.
- `UndefinedValidator`: This validator returns `true` if the given value is
  `undefined`

## TODO

- Add JSDoc documentation
- Add tupel validating in array validator
