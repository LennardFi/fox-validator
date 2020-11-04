import { ValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is `null`.
 *
 * @example
 * const isNull = new NullValidator().seal()
 *
 * isNull({}) // false
 * isNull(undefined) // false
 * isNull(null) // true
 */
export default class NullValidator extends ValidatorBase {
    constructor() {
        super()
        this.ruleCheckers.push(value => value === null)
    }
}
