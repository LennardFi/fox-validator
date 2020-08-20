import { ValidatorBase } from "./ValidatorBase";
export default class BooleanValidator extends ValidatorBase<boolean> {
    constructor();
    isFalse(): BooleanValidator;
    isTrue(): BooleanValidator;
}
