import { EqualsValidatorBase } from "./ValidatorBase"
import { SealedValidator } from "./SealedValidator"

export default class ObjectValidator<M extends Record<string, unknown> = Record<string, unknown>> extends EqualsValidatorBase<M> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "object" && value !== null)
    }

    equals(compareValue: M): ObjectValidator<M> {
        super.equals(compareValue)
        return this
    }

    equalsNot(compareValue: M): ObjectValidator<M> {
        super.equalsNot(compareValue)
        return this
    }

    equalsOneOf(...compareValues: M[]): ObjectValidator<M> {
        super.equalsOneOf(...compareValues)
        return this
    }

    equalsNoneOf(...compareValues: M[]): ObjectValidator<M> {
        super.equalsNoneOf(...compareValues)
        return this
    }

    map(validatorMap: Record<keyof M, SealedValidator<M[keyof M]> | SealedValidator<M[keyof M]>[]>): ObjectValidator<M> {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, key) => {
                if (!prevResult) {
                    return prevResult
                }
                const subValidator = validatorMap[key]
                if (Array.isArray(subValidator)) {
                    return subValidator.some(subValidator => subValidator(value[key]))
                }
                return subValidator(value[key])
            }, true as boolean)
        })
        return this
    }
}