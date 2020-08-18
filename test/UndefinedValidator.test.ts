import { UndefinedValidator } from "../src"

describe("UndefinedValidator", () => {
    it("", () => {
        const isUndefined = new UndefinedValidator().seal()
        expect(isUndefined(123)).toBeFalsy()
        expect(isUndefined("123")).toBeFalsy()
        expect(isUndefined(null)).toBeFalsy()
        expect(isUndefined(undefined)).toBeTruthy()
    })
})