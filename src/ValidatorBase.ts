import sealedValidator, { SealedValidator } from "./SealedValidator"

export type ValidatorRule<T> =
    (value: T) => boolean

/**
 * The base class for new validators.
 */
export abstract class ValidatorBase<T = unknown> {
    protected ruleCheckers: ValidatorRule<T>[]

    constructor() {
        this.ruleCheckers = []
    }

    /**
     * Seals the validator instance to a validation function.
     */
    seal(): SealedValidator<T> {
        return sealedValidator(this.ruleCheckers)
    }
}

/**
 * This base implements default methods for doing equality checks.
 */
export abstract class EqualsValidatorBase<T = unknown> extends ValidatorBase<T> {
    constructor() {
        super()
    }

    /**
     * Compares two values for equality with the `===` operator.
     */
    equals(compareValue: T): EqualsValidatorBase<T> {
        this.ruleCheckers.push(value => compareValue === value)
        return this
    }

    /**
     * Compares two values for no equality with the `===` operator.
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
