import { SealedValidator } from "./SealedValidator";
import { ValidatorBase } from "./ValidatorBase";
export default class MaybeValidator<T extends any = any> extends ValidatorBase<T> {
    constructor();
    maybe(typeValidator: SealedValidator<T>): MaybeValidator<T>;
}
