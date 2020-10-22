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

    greaterThan(n: number): NumberValidator {
        this.ruleCheckers.push(value => value > n)
        return this
    }

    greaterThanOrEqual(n: number): NumberValidator {
        this.ruleCheckers.push(value => value >= n)
        return this
    }

    isInt(): NumberValidator {
        this.ruleCheckers.push(value => Number.isInteger(value))
        return this
    }

    isFloat(): NumberValidator {
        this.ruleCheckers.push(value => !Number.isInteger(value))
        return this
    }

    lessThan(n: number): NumberValidator {
        this.ruleCheckers.push(value => value < n)
        return this
    }

    lessThanOrEqual(n: number): NumberValidator {
        this.ruleCheckers.push(value => value <= n)
        return this
    }
}
