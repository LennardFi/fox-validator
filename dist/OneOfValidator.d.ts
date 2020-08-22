import { ValidatorBase } from "./ValidatorBase";
import { SealedValidator } from "./SealedValidator";
export default class OneOfValidator extends ValidatorBase {
    constructor();
    oneOf(...subValidators: SealedValidator<any>[]): OneOfValidator;
}
