import { EqualsValidatorBase } from "./ValidatorBase";
import { SealedValidator } from "./SealedValidator";
export default class ArrayValidator extends EqualsValidatorBase<unknown[]> {
    constructor();
    equals(compareValue: unknown[]): ArrayValidator;
    equalsNot(compareValue: unknown[]): ArrayValidator;
    equalsOneOf(...compareValues: unknown[][]): ArrayValidator;
    equalsNoneOf(...compareValues: unknown[][]): ArrayValidator;
    validateItems(...subValidators: SealedValidator<any>[]): ArrayValidator;
    validateTupel(...validatorTupel: SealedValidator<any>[]): ArrayValidator;
}
