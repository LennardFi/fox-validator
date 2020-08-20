import { ObjectValidator } from "../src"
import { NumberValidator } from "../src"

describe("objectValidator", () => {
    it("", () => {
        const isObject = new ObjectValidator().seal()
        expect(isObject(1)).toBeFalsy()
        expect(isObject("1")).toBeFalsy()
        expect(isObject(null)).toBeFalsy()
        expect(isObject({})).toBeTruthy()
    })

    it("map", () => {
        const mapsObject = new ObjectValidator<Record<"a" | "b", number>>().map({
            a: new NumberValidator().equals(1).seal(),
            b: new NumberValidator().equals(2).seal(),
        }).seal()
        expect(mapsObject("abc")).toBeFalsy()
        expect(mapsObject({
            a: 1,
        })).toBeFalsy()
        expect(mapsObject({
            a: 1,
            b: 2,
        })).toBeTruthy()
    })
})
