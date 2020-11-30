import { SealedValidator } from "./SealedValidator"
import UndefinedValidator from "./UndefinedValidator"
import { EqualsValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is an object.
 * 
 * @example
 * const isObject = new ObjectValidator().seal()
 * 
 * isObject(true) // false
 * isObject(null) // false
 * isObject({}) // true
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default class ObjectValidator<O extends object> extends EqualsValidatorBase<O> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "object" && value !== null)
    }

    equals(compareValue: O): ObjectValidator<O> {
        super.equals(compareValue)
        return this
    }

    equalsNot(compareValue: O): ObjectValidator<O> {
        super.equalsNot(compareValue)
        return this
    }

    equalsOneOf(...compareValues: O[]): ObjectValidator<O> {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsNoneOf(...compareValues: O[]): ObjectValidator<O> {
        super.equalsNoneOf(...compareValues)
        return this
    }

    /**
     * Checks if the value is an instance of the given ES6 class function.
     * @param c The ES6 instance generator class function.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    instanceOf(c: Function): ObjectValidator<O> {
        this.ruleCheckers.push(value => value instanceof c)
        return this
    }

    /**
     * Validates the properties of the value to be validated.
     * @param validatorMap A object that maps required property keys to sealed
     * validators.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map(validatorMap: Record<keyof O, SealedValidator<any>>): ObjectValidator<O> {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, k) => {
                const key = k as keyof O
                if (!prevResult) {
                    return prevResult
                }
                return validatorMap[key](value[key])
            }, true as boolean)
        })
        return this
    }

    /**
     * Validates the properties of the value to be validated. Unlike 'map', the
     * properties can also be optional.
     * @param validatorMap A object that maps required property keys to sealed
     * validators.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapPartial(validatorMap: Record<keyof O, SealedValidator<any>>): ObjectValidator<Partial<O>> {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, k) => {
                const key = k as keyof O
                if (!prevResult) {
                    return prevResult
                }
                return validatorMap[key](value[key]) || (new UndefinedValidator().seal())(value[key])
            }, true as boolean)
        })
        return this as unknown as ObjectValidator<Partial<O>>
    }
}
