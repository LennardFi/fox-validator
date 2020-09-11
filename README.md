# fox-validator

A value validation library with a jest like api.

We want to ensure that every IO function of our code base ensures the incoming
or outgoing data is a valid fox. TypeScript doesn't provide a way to do this.

With `fox-validator` we can validate incoming data. It produces a [custom type
guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)
function.

## Usage

```ts
import { FunctionValidator, ObjectValidator } from "../src/index"

/* Our target data type */
interface Fox {
    say(): string
}

/* Validator function definition */
const isFox = new ObjectValidator<Fox>().map({
    say: new FunctionValidator().expectsArgumentCount(0).seal(),
}).seal()

/* Defining test data */
const fox: unknown = {
    say: () => "🦊"
}
// fox is of type `unknown`

if (isFox(fox)) {
    // fox is of type `Fox`
    // lets see what the fox say...
    console.log(fox.say()) // > 🦊
}
// fox is of type `unknown`
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
- `MaybeValidator`: Proxies another validator. A given value has to be
  `undefined` or needs to be validated by another given validator.
- `NullValidator`: Returns `true` if the value is equal to `null`.
- `NumberValidator`: Ensures a given value is a number. This generator also
  provides methods to check the number.
- `ObjectValidator`: A validator generator to check objects and their
  properties.
- `OneOfValidator`: A validator generator that accepts multiple validator. If
  one subvalidator returns true the value will be validated.
- `StringValidator`: This generator ensures a given value is a string. The
  generator also provides methods to check the string.
- `UndefinedValidator`: This validator returns `true` if the given value is
  `undefined`

## TODO

- Add JSDoc documentation
