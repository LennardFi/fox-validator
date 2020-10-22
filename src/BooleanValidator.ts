import { ValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is a boolean.
 * 
 * @example
 * const isBoolean = new BooleanValidator().seal()
 * 
 * isBoolean("abc") // false
 * isBoolean(false) // true
 * isBoolean(true) // true
 */
export default class BooleanValidator extends ValidatorBase<boolean> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "boolean")
    }

    /**
     * Checks if the boolean needs to be checked is `false`.
     */
    isFalse(): BooleanValidator {
        this.ruleCheckers.push(value => value === false)
        return this
    }

    /**
     * Checks if the boolean needs to be checked is `true`.
     */
    isTrue(): BooleanValidator {
        this.ruleCheckers.push(value => value === true)
        return this
    }
}
