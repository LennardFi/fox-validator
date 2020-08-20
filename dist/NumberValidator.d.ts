import { EqualsValidatorBase } from "./ValidatorBase";
export default class NumberValidator extends EqualsValidatorBase<number> {
    constructor();
    equals(compareValue: number): NumberValidator;
    equalsNot(compareValue: number): NumberValidator;
    equalsOneOf(...compareValues: number[]): NumberValidator;
    equalsNoneOf(...compareValues: number[]): NumberValidator;
    isInt(): NumberValidator;
    isFloat(): NumberValidator;
}
