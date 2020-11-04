import { SealedValidator } from "./SealedValidator"
import UndefinedValidator from "./UndefinedValidator"
import { ValidatorBase } from "./ValidatorBase"

/**
 * This validator can wrap another sealed validator. Once sealed this validator
 * returns `true` if the value that needs to be validated is `undefined` or was
 * successful validated by the wrapped validator.
 *
 * @example
 * const isMaybeString = new MaybeValidator().maybe(new StringValidator().seal()).seal()
 *
 * isMaybeString("abc") // true
 * isMaybeString(undefined) // true
 * isMaybeString(123) // false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class MaybeValidator<T extends any = any> extends ValidatorBase<T> {
    constructor() {
        super()
    }

    maybe(typeValidator: SealedValidator<T>): MaybeValidator<T> {
        const subValidators = [
            new UndefinedValidator().seal(),
            typeValidator,
        ]
        this.ruleCheckers.push(value => subValidators.some(subValidator => subValidator(value)))
        return this
    }
}
