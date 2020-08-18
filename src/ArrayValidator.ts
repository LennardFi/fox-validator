import { EqualsValidatorBase } from "./ValidatorBase"
import { SealedValidator } from "./SealedValidator"

export default class ArrayValidator extends EqualsValidatorBase<unknown[]> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "object" && Array.isArray(value))
    }

    equals(compareValue: unknown[]): ArrayValidator {
        super.equals(compareValue)
        return this
    }

    equalsNot(compareValue: unknown[]): ArrayValidator {
        super.equalsNot(compareValue)
        return this
    }

    equalsOneOf(...compareValues: unknown[][]): ArrayValidator {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsNoneOf(...compareValues: unknown[][]): ArrayValidator {
        super.equalsNoneOf(...compareValues)
        return this
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validateItems(...subValidators: SealedValidator<any>[]): ArrayValidator {
        this.ruleCheckers.push(value => {
            return !value.some(item => {
                return !subValidators.some(subValidator => {
                    return subValidator(item)
                })
            })
        })
        return this
    }
}