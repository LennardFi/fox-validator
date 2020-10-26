import { EqualsValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is a string.
 *
 * @example
 * const isString = new StringValidator().seal()
 *
 * isString(false) // false
 * isString("abc") // true
 */
export default class StringValidator extends EqualsValidatorBase<string> {
    constructor() {
        super()
        this.ruleCheckers.push((value): boolean => {
            if (typeof value === "string") {
                return true
            }
            return false
        })
    }

    /**
     * Checks if the string needs to be validated contains the given string
     * @param searchString
     * @param ignoreCase
     */
    contains(searchString: string, ignoreCase?: boolean): StringValidator {
        if (ignoreCase) {
            this.ruleCheckers.push(value => searchString.toUpperCase().includes(value.toUpperCase()))
            return this
        }
        this.ruleCheckers.push(value => searchString.includes(value))
        return this
    }

    equals(compareValue: string): StringValidator {
        super.equals(compareValue)
        return this
    }

    /**
     * Like `equals` but ignores casing.
     */
    equalsIgnoreCasing(compareValue: string): StringValidator {
        this.ruleCheckers.push(value => value.toUpperCase() === compareValue.toUpperCase())
        return this
    }

    equalsNot(compareValue: string): StringValidator {
        super.equalsNot(compareValue)
        return this
    }

    /**
     * Like `equalsNot` but ignores casing.
     */
    equalsNotIgnoreCasing(compareValue: string): StringValidator {
        this.ruleCheckers.push(value => value.toUpperCase() !== compareValue.toUpperCase())
        return this
    }

    equalsOneOf(...compareValues: string[]): StringValidator {
        super.equalsOneOf(...compareValues)
        return this
    }

    /**
     * Like `equalsOneOf` but ignores casing.
     */
    equalsOneOfIgnoreCasing(...compareValues: string[]): StringValidator {
        this.ruleCheckers.push(value => compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()))
        return this
    }

    equalsNoneOf(...compareValues: string[]): StringValidator {
        super.equalsNoneOf(...compareValues)
        return this
    }

    /**
     * Like `equalsNoneOf` but ignores casing.
     */
    equalsNoneOfIgnoreCasing(...compareValues: string[]): StringValidator {
        this.ruleCheckers.push(value => !compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()))
        return this
    }

    /**
     * Checks the length of the string.
     * @param equal The expected length of the string.
     */
    hasLength(equal: number): StringValidator
    /**
     * Checks the length of the string.
     * @param min The minimum length of the string.
     * @param max The maximum length of the string.
     */
    hasLength(min: number, max: number): StringValidator
    hasLength(minOrEqual: number, max?: number): StringValidator {
        if (max === undefined) {
            this.ruleCheckers.push(value => {
                return value.length === minOrEqual
            })
        } else {
            this.ruleCheckers.push(value => {
                return value.length > minOrEqual && value.length < max
            })
        }
        return this
    }

    /**
     * Validates the string needs to be validated with a regex pattern.
     */
    match(pattern: RegExp | string): StringValidator {
        this.ruleCheckers.push(value => value.match(pattern) ? true : false)
        return this
    }
}
