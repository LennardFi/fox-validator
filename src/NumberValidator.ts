import { EqualsValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is a number.
 *
 * @example
 * const isNumber = new NumberValidator().seal()
 *
 * isNumber(false) // false
 * isNumber(123) // true
 */
export default class NumberValidator extends EqualsValidatorBase<number> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "number")
    }

    equals(compareValue: number): NumberValidator {
        super.equals(compareValue)
        return this
    }

    equalsNot(compareValue: number): NumberValidator {
        super.equalsNot(compareValue)
        return this
    }

    equalsNoneOf(...compareValues: number[]): NumberValidator {
        super.equalsNoneOf(...compareValues)
        return this
    }

    equalsOneOf(...compareValues: number[]): NumberValidator {
        super.equalsOneOf(...compareValues)
        return this
    }

    /**
     * This validator returns `true` if the value needs to be validated is
     * greater than the compare value.
     */
    greaterThan(compareValue: number): NumberValidator {
        this.ruleCheckers.push(value => value > compareValue)
        return this
    }

    /**
     * This validator returns `true` if the value needs to be validated is
     * greater than or equal to the compare value.
     */
    greaterThanOrEqual(compareValue: number): NumberValidator {
        this.ruleCheckers.push(value => value >= compareValue)
        return this
    }

    /**
     * This validator checks if the value needs to be validated is a integer.
     */
    isInt(): NumberValidator {
        this.ruleCheckers.push(value => Number.isInteger(value))
        return this
    }

    /**
     * This validator checks if the value needs to be validated isn't a integer.
     */
    isFloat(): NumberValidator {
        this.ruleCheckers.push(value => !Number.isInteger(value))
        return this
    }

    /**
     * This validator returns `true` if the value needs to be validated is less
     * than the compare value.
     */
    lessThan(compareValue: number): NumberValidator {
        this.ruleCheckers.push(value => value < compareValue)
        return this
    }

    /**
     * This validator returns `true` if the value needs to be validated is less
     * than or equal the compare value.
     */
    lessThanOrEqual(compareValue: number): NumberValidator {
        this.ruleCheckers.push(value => value <= compareValue)
        return this
    }
}
