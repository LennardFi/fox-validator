import { NumberValidator } from "../src"

describe("NumberValidator", () => {
    it("", () => {
        const isNumber = new NumberValidator().seal()
        expect(isNumber(null)).toBeFalsy()
        expect(isNumber(undefined)).toBeFalsy()
        expect(isNumber("123")).toBeFalsy()
        expect(isNumber(123)).toBeTruthy()
    })
    it("equals", () => {
        const isFortyTwo = new NumberValidator().equals(42).seal()
        expect(isFortyTwo("123")).toBeFalsy()
        expect(isFortyTwo(-Infinity)).toBeFalsy()
        expect(isFortyTwo(+Infinity)).toBeFalsy()
        expect(isFortyTwo(123)).toBeFalsy()
        expect(isFortyTwo(42.1)).toBeFalsy()
        expect(isFortyTwo(42)).toBeTruthy()
    })
    it("equalsOneOf", () => {
        const isOneOrZero = new NumberValidator().equalsOneOf(0, 1).seal()
        expect(isOneOrZero("10")).toBeFalsy()
        expect(isOneOrZero(10)).toBeFalsy()
        expect(isOneOrZero(1.1)).toBeFalsy()
        expect(isOneOrZero(0)).toBeTruthy()
        expect(isOneOrZero(1)).toBeTruthy()
    })
    it("isInt", () => {
        const isInt = new NumberValidator().isInt().seal()
        expect(isInt("abc")).toBeFalsy()
        expect(isInt("123")).toBeFalsy()
        expect(isInt(1.23)).toBeFalsy()
        expect(isInt(123)).toBeTruthy()
    })
    it("isFloat", () => {
        const isFloat = new NumberValidator().isFloat().seal()
        expect(isFloat("abc")).toBeFalsy()
        expect(isFloat("123")).toBeFalsy()
        expect(isFloat(123)).toBeFalsy()
        expect(isFloat(1.23)).toBeTruthy()
    })
})
