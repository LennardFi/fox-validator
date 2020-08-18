import { EqualsValidatorBase } from "./ValidatorBase"

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

    equalsOneOf(...compareValues: number[]): NumberValidator {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsNoneOf(...compareValues: number[]): NumberValidator {
        super.equalsNoneOf(...compareValues)
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
}