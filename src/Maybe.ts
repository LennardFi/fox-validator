import sealedValidator, { SealedValidator } from "./SealedValidator"
import UndefinedValidator from "./UndefinedValidator"

/**
 * This function can wrap a sealed validator. It returns a sealed validator that
 * returns `true` if the value that needs to be validated is `undefined` or was
 * successful validated by the wrapped validator.
 *
 * @example
 * const isMaybeString = Maybe(new StringValidator().seal())
 *
 * isMaybeString("abc") // true
 * isMaybeString(undefined) // true
 * isMaybeString(123) // false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Maybe<T>(typeValidator: SealedValidator<T>): SealedValidator<undefined | T> {
    const subValidators = [
        new UndefinedValidator().seal(),
        typeValidator,
    ]
    return sealedValidator([value => subValidators.some(subValidator => subValidator(value))])
}
