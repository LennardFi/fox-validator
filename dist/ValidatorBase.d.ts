import { SealedValidator } from "./SealedValidator";
export declare type RuleChecker<T> = (value: T) => boolean;
export declare abstract class ValidatorBase<T = unknown> {
    protected ruleCheckers: RuleChecker<T>[];
    constructor();
    seal(): SealedValidator<T>;
}
export declare abstract class EqualsValidatorBase<T = unknown> extends ValidatorBase<T> {
    constructor();
    equals(compareValue: T): EqualsValidatorBase<T>;
    equalsNot(compareValue: T): EqualsValidatorBase<T>;
    equalsOneOf(...compareValues: T[]): EqualsValidatorBase<T>;
    equalsNoneOf(...compareValue: T[]): EqualsValidatorBase<T>;
}
