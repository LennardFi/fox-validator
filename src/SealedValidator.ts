import { RuleChecker } from "./ValidatorBase"

export interface SealedValidator<T = unknown> {
    (value: unknown): value is T
    getCheckers(): RuleChecker<T>[]
}

export default function sealedValidator<T = unknown>(ruleCheckers: RuleChecker<T>[]): SealedValidator<T> {
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
