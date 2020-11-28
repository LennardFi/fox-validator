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
export default class ArrayValidator<T extends unknown[] = unknown[]> extends EqualsValidatorBase<T> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "object" && Array.isArray(value))
    }

    equals(compareValue: T): ArrayValidator<T> {
        super.equals(compareValue)
        return this
    }

    equalsNot(compareValue: T): ArrayValidator<T> {
        super.equalsNot(compareValue)
        return this
    }

    equalsOneOf(...compareValues: T[]): ArrayValidator<T> {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsNoneOf(...compareValues: T[]): ArrayValidator<T> {
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
    validateItems<T extends unknown>(...subValidators: SealedValidator<any>[]): ArrayValidator<T[]> {
        this.ruleCheckers.push(value => {
            return !value.some(item => {
                return !subValidators.some(subValidator => {
                    return subValidator(item)
                })
            })
        })
        return this as unknown as ArrayValidator<T[]>
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
    validateTupel<T extends unknown[]>(...validatorTupel: SealedValidator<any>[]): ArrayValidator<T[]> {
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
        return this as unknown as ArrayValidator<T[]>
    }
}
