import { EqualsValidatorBase } from "./ValidatorBase";
export default class StringValidator extends EqualsValidatorBase<string> {
    constructor();
    contains(searchString: string, ignoreCase?: boolean): StringValidator;
    equals(compareValue: string): StringValidator;
    equalsIgnoreCasing(compareValue: string): StringValidator;
    equalsNot(compareValue: string): StringValidator;
    equalsNotIgnoreCasing(compareValue: string): StringValidator;
    equalsOneOf(...compareValues: string[]): StringValidator;
    equalsOneOfIgnoreCasing(...compareValues: string[]): StringValidator;
    equalsNoneOf(...compareValues: string[]): StringValidator;
    equalsNoneOfIgnoreCasing(...compareValues: string[]): StringValidator;
    hasLength(equal: number): StringValidator;
    hasLength(min: number, max: number): StringValidator;
    match(pattern: RegExp | string): StringValidator;
}
