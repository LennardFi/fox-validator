import { ValidatorBase } from "./ValidatorBase"

/**
 * Checks if a value is a function.
 * 
 * @example
 * const isFunction = new FunctionValidator().seal()
 * 
 * isFunction("abc") // false
 * isFunction(Date) // true
 * isFunction(console.log) // true
 */
export default class FunctionValidator extends ValidatorBase<(...args: unknown[]) => unknown> {
    constructor() {
        super()
        this.ruleCheckers.push(value => typeof value === "function")
    }

    /**
     * Checks if the function needs to be validated accepts the given amount of
     * arguments.
     */
    expectsArgumentCount(args: number): FunctionValidator {
        this.ruleCheckers.push(value => value.length === args)
        return this
    }
}
