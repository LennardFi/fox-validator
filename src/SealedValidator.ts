import { ValidatorRule } from "./ValidatorBase"

export interface SealedValidator<T = unknown> {
    /**
     * Validates the given value
     */
    (value: unknown): value is T
    /**
     * An array of sub validator functions.
     */
    getCheckers(): ValidatorRule<T>[]
}

/**
 * A sealed validator is a function that can be used to validate values. It is
 * being returned when a validator instance become sealed.
 * @param ruleCheckers A list of rule checkers returned by a validator instance.
 */
export default function sealedValidator<T = unknown>(ruleCheckers: ValidatorRule<T>[]): SealedValidator<T> {
    const func = (value: unknown): value is T => {
        return ruleCheckers.reduce((prevCheckResult, checker) => {
            if (!prevCheckResult) {
                return prevCheckResult
            }
            return checker(value as T)
        }, true as boolean)
    }
    func.getCheckers = () => ruleCheckers
    return func
}
