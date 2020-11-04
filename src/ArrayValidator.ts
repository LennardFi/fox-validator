import { SealedValidator } from "./SealedValidator"
import { EqualsValidatorBase } from "./ValidatorBase"

/**
 * Validates array data types
 *
 * @example
 * const isArray = new ArrayValidator().seal()
 *
 * isArray([]) // true
 * isArray(["abc", 123]) // true
 * isArray(123) // false
 * isArray({}) // false
 */
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

    /**
     * Validates the array to be validated by checking it's items with a list of
     * sealed validator functions.
     *
     * **Note:** Every validator function needs to return `true` for each item.
     *
     * @param subValidators A list of sub validators to validate the items of
     * the array.
     */
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

    /**
     * Validates the array to be validated by checking it's the length of both
     * lists. After that it checks the first item with the first validator
     * function, the second item with the second validator function and so on.
     *
     * @param subValidators A list of sub validators to validate the items of
     * the array
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validateTupel(...validatorTupel: SealedValidator<any>[]): ArrayValidator {
        this.ruleCheckers.push(value => {
            if (value.length !== validatorTupel.length) {
                return false
            }
            return value.reduce((prevResult, tupelValue, i) => {
                if (!prevResult || validatorTupel[i] === undefined) {
                    return prevResult
                }
                return validatorTupel[i](tupelValue)
            }, true as boolean) as boolean
        })
        return this
    }
}
