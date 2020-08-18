import { FunctionValidator } from "../src"

describe("FunctionValidator", () => {
    it("", () => {
        const isFunction = new FunctionValidator().seal()
        expect(isFunction(null)).toBeFalsy()
        expect(isFunction(123)).toBeFalsy()
        expect(isFunction("123")).toBeFalsy()
        expect(isFunction(() => void 0)).toBeTruthy()
        expect(isFunction(function () { console.log("Test completed") })).toBeTruthy()
        expect(isFunction(console.log)).toBeTruthy()
    })
    it("expectsArgumentCount", () => {
        const expectsTwoArguments = new FunctionValidator().expectsArgumentCount(2).seal()
        expect(expectsTwoArguments(123)).toBeFalsy()
        expect(expectsTwoArguments(() => void 0)).toBeFalsy()
        expect(expectsTwoArguments((x: unknown) => x)).toBeFalsy()
        expect(expectsTwoArguments((x: number, y: number) => x + y)).toBeTruthy()

        const expectsZeroArguments = new FunctionValidator().expectsArgumentCount(0).seal()
        expect(expectsZeroArguments(123)).toBeFalsy()
        expect(expectsZeroArguments((x: unknown) => x)).toBeFalsy()
        expect(expectsZeroArguments((x: number, y: number) => x + y)).toBeFalsy()
        expect(expectsZeroArguments(() => void 0)).toBeTruthy()
        expect(expectsZeroArguments(() => 123)).toBeTruthy()
    })
})