import { EqualsValidatorBase } from "./ValidatorBase";
export default class NumberValidator extends EqualsValidatorBase<number> {
    constructor();
    equals(compareValue: number): NumberValidator;
    equalsNot(compareValue: number): NumberValidator;
    equalsNoneOf(...compareValues: number[]): NumberValidator;
    equalsOneOf(...compareValues: number[]): NumberValidator;
    greaterThan(n: number): NumberValidator;
    greaterThanOrEqual(n: number): NumberValidator;
    isInt(): NumberValidator;
    isFloat(): NumberValidator;
    lessThan(n: number): NumberValidator;
    lessThanOrEqual(n: number): NumberValidator;
}
