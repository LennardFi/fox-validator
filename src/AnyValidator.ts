import { ValidatorBase } from "./ValidatorBase"

/**
 * This validator that returns always `true`.
 * 
 * @example
 * const isValue = new AnyValidator().seal()
 * 
 * isValue(false) // true
 * isValue("abc") // true
 * isValue(undefined) // true
 * isValue({}) // true
 */
export default class AnyValidator extends ValidatorBase<unknown> {
    constructor() {
        super()
        this.ruleCheckers.push(() => true)
    }
}
