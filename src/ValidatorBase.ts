import sealedValidator, { SealedValidator } from "./SealedValidator"

export type RuleChecker<T> = (value: T) => boolean

export abstract class ValidatorBase<T = unknown> {
    protected ruleCheckers: RuleChecker<T>[]

    constructor() {
        this.ruleCheckers = []
    }

    seal(): SealedValidator<T> {
        return sealedValidator(this.ruleCheckers)
    }
}

export abstract class EqualsValidatorBase<T = unknown> extends ValidatorBase<T> {
    constructor() {
        super()
    }

    equals(compareValue: T): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue === value)
        return this
    }

    equalsNot(compareValue: T): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue !== value)
        return this
    }

    equalsOneOf(...compareValues: T[]): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValues.indexOf(value) !== -1)
        return this
    }

    equalsNoneOf(...compareValue: T[]): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue.indexOf(value) === -1)
        return this
    }
}
