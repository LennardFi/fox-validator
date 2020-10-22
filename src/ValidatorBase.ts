import sealedValidator, { SealedValidator } from "./SealedValidator"

export type RuleChecker<T> = (value: T) => boolean

export abstract class ValidatorBase<T = unknown> {
    protected ruleCheckers: RuleChecker<T>[]

    constructor() {
        this.ruleCheckers = []
    }

    /**
     * Seals the validator instance to validation function.
     */
    seal(): SealedValidator<T> {
        return sealedValidator(this.ruleCheckers)
    }
}

export abstract class EqualsValidatorBase<T = unknown> extends ValidatorBase<T> {
    constructor() {
        super()
    }

    /**
     * Compares two values for equality (`===`).
     */
    equals(compareValue: T): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue === value)
        return this
    }

    /**
     * Compares two values for no equality (`===`).
     */
    equalsNot(compareValue: T): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue !== value)
        return this
    }

    /**
     * Checks that one value equals the value to be checked.
     */
    equalsOneOf(...compareValues: T[]): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValues.indexOf(value) !== -1)
        return this
    }

    /**
     * Checks that no value equals the value to be checked.
     */
    equalsNoneOf(...compareValue: T[]): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue.indexOf(value) === -1)
        return this
    }
}
