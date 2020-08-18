import { EqualsValidatorBase } from "./ValidatorBase"

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

    equalsIgnoreCasing(compareValue: string): StringValidator {
        this.ruleCheckers.push(value => value.toUpperCase() === compareValue.toUpperCase())
        return this
    }

    equalsNot(compareValue: string): StringValidator {
        super.equalsNot(compareValue)
        return this
    }

    equalsNotIgnoreCasing(compareValue: string): StringValidator {
        this.ruleCheckers.push(value => value.toUpperCase() !== compareValue.toUpperCase())
        return this
    }

    equalsOneOf(...compareValues: string[]): StringValidator {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsOneOfIgnoreCasing(...compareValues: string[]): StringValidator {
        this.ruleCheckers.push(value => compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()))
        return this
    }

    equalsNoneOf(...compareValues: string[]): StringValidator {
        super.equalsNoneOf(...compareValues)
        return this
    }

    equalsNoneOfIgnoreCasing(...compareValues: string[]): StringValidator {
        this.ruleCheckers.push(value => !compareValues.map(s => s.toUpperCase()).includes(value.toUpperCase()))
        return this
    }

    hasLength(equal: number): StringValidator
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

    match(pattern: RegExp | string): StringValidator {
        this.ruleCheckers.push(value => value.match(pattern) ? true : false)
        return this
    }
}