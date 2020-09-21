import { EqualsValidatorBase } from "./ValidatorBase"
import { SealedValidator } from "./SealedValidator"
import UndefinedValidator from "./UndefinedValidator"

// eslint-disable-next-line @typescript-eslint/ban-types
export default class ObjectValidator<M extends object> extends EqualsValidatorBase<M> {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map(validatorMap: Record<keyof M, SealedValidator<any> | SealedValidator<any>[]>): ObjectValidator<M> {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, k) => {
                const key = k as keyof M
                if (!prevResult) {
                    return prevResult
                }
                const subValidator = validatorMap[key] as SealedValidator<M[keyof M]> | SealedValidator<M[keyof M]>[]
                if (Array.isArray(subValidator)) {
                    return subValidator.some(subValidator => subValidator(value[key]))
                }
                return subValidator(value[key])
            }, true as boolean)
        })
        return this
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapPartial(validatorMap: Record<keyof M, SealedValidator<any> | SealedValidator<any>[]>): ObjectValidator<M> {
        this.ruleCheckers.push(value => {
            return Object.keys(validatorMap).reduce((prevResult, k) => {
                const key = k as keyof M
                if (!prevResult) {
                    return prevResult
                }
                const subValidator = validatorMap[key] as SealedValidator<M[keyof M]> | SealedValidator<M[keyof M]>[]
                if (Array.isArray(subValidator)) {
                    subValidator.push(new UndefinedValidator().seal() as unknown as SealedValidator<M[keyof M]>)
                    return subValidator.some(subValidator => subValidator(value[key]))
                }
                if (subValidator(value[key])) {
                    return true
                }
                return new UndefinedValidator().seal()(value[key])
            }, true as boolean)
        })
        return this
    }
}
