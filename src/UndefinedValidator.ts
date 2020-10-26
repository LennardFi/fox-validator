import { ValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is `undefined`.
 *
 * @example
 * const isUndefined = new UndefinedValidator().seal()
 *
 * isUndefined(false) // false
 * isUndefined(null) // false
 * isUndefined(undefined) // true
 */
export default class UndefinedValidator extends ValidatorBase<undefined> {
    constructor() {
        super()
        this.ruleCheckers.push(value => value === undefined)
    }
}
