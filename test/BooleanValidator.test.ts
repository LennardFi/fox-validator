import { BooleanValidator } from "../src"

describe("BooleanValidator", () => {
    it("", () => {
        const isBoolean = new BooleanValidator().seal()
        expect(isBoolean(1)).toBeFalsy()
        expect(isBoolean("abc")).toBeFalsy()
        expect(isBoolean("")).toBeFalsy()
        expect(isBoolean({})).toBeFalsy()
        expect(isBoolean(true)).toBeTruthy()
        expect(isBoolean(false)).toBeTruthy()
    })
    it("isFalse", () => {
        const isFalseValidator = new BooleanValidator().isFalse().seal()
        expect(isFalseValidator(123)).toBeFalsy()
        expect(isFalseValidator(true)).toBeFalsy()
        expect(isFalseValidator(false)).toBeTruthy()
    })
    it("isTrue", () => {
        const isFalseValidator = new BooleanValidator().isTrue().seal()
        expect(isFalseValidator(123)).toBeFalsy()
        expect(isFalseValidator(false)).toBeFalsy()
        expect(isFalseValidator(true)).toBeTruthy()
    })
})
