import { NumberValidator, OneOf, StringValidator } from "../src"

describe("OneOf", () => {
    it("", () => {
        const isStringOrNumber = OneOf([new NumberValidator().seal(), new StringValidator().seal()])
        expect(isStringOrNumber(true)).toBeFalsy()
        expect(isStringOrNumber(null)).toBeFalsy()
        expect(isStringOrNumber("abc")).toBeTruthy()
        expect(isStringOrNumber(123)).toBeTruthy()
    })
})
