import { NullValidator } from "../src"

describe("NullValidator", () => {
    it("", () => {
        const isNull = new NullValidator().seal()
        expect(isNull(123)).toBeFalsy()
        expect(isNull("123")).toBeFalsy()
        expect(isNull(undefined)).toBeFalsy()
        expect(isNull(null)).toBeTruthy()
    })
})
