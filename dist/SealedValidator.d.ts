import { RuleChecker } from "./ValidatorBase";
export interface SealedValidator<T = unknown> {
    (value: unknown): value is T;
    getCheckers(): RuleChecker<T>[];
}
export default function sealedValidator<T = unknown>(ruleCheckers: RuleChecker<T>[]): SealedValidator<T>;
