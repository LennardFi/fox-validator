import { AnyValidator } from "../src"

describe("AnyValidator", () => {
    it("", () => {
        const isAny = new AnyValidator().seal()
        expect(isAny("hello world")).toBeTruthy()
        expect(isAny(true)).toBeTruthy()
        expect(isAny(false)).toBeTruthy()
        expect(isAny(123)).toBeTruthy()
        expect(isAny(null)).toBeTruthy()
        expect(isAny(undefined)).toBeTruthy()
    })
})