import { ValidatorBase } from "./ValidatorBase"

export default class FunctionValidator extends ValidatorBase<(...args: unknown[]) => unknown> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "function")
    }

    expectsArgumentCount(args: number): FunctionValidator {
        this.ruleCheckers.push(value => value.length === args)
        return this
    }
}
