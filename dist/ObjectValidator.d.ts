import { EqualsValidatorBase } from "./ValidatorBase";
import { SealedValidator } from "./SealedValidator";
export default class ObjectValidator<M extends Record<string, unknown> = Record<string, unknown>> extends EqualsValidatorBase<M> {
    constructor();
    equals(compareValue: M): ObjectValidator<M>;
    equalsNot(compareValue: M): ObjectValidator<M>;
    equalsOneOf(...compareValues: M[]): ObjectValidator<M>;
    equalsNoneOf(...compareValues: M[]): ObjectValidator<M>;
    map(validatorMap: Record<keyof M, SealedValidator<M[keyof M]> | SealedValidator<M[keyof M]>[]>): ObjectValidator<M>;
}
