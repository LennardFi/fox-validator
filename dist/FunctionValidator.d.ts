import { ValidatorBase } from "./ValidatorBase";
export default class FunctionValidator extends ValidatorBase<(...args: unknown[]) => unknown> {
    constructor();
    expectsArgumentCount(args: number): FunctionValidator;
}
