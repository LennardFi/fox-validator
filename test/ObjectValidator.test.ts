import { NumberValidator, ObjectValidator } from "../src"

describe("ObjectValidator", () => {
    it("", () => {
        const isObject = new ObjectValidator().seal()
        expect(isObject(1)).toBeFalsy()
        expect(isObject("1")).toBeFalsy()
        expect(isObject(null)).toBeFalsy()
        expect(isObject({})).toBeTruthy()
    })
    it("equals", () => {
        const obj = {}
        const isSameObject = new ObjectValidator().equals(obj).seal()
        expect(isSameObject(123)).toBeFalsy()
        expect(isSameObject({})).toBeFalsy()
        expect(isSameObject({ ...obj })).toBeFalsy()
        expect(isSameObject(obj)).toBeTruthy()
    })
    it("equalsNot", () => {
        const obj = {}
        const isNotSameObject = new ObjectValidator().equalsNot(obj).seal()
        expect(isNotSameObject(123)).toBeFalsy()
        expect(isNotSameObject(obj)).toBeFalsy()
        expect(isNotSameObject({})).toBeTruthy()
        expect(isNotSameObject({ ...obj })).toBeTruthy()
    })
    it("equalsNoneOf", () => {
        const obj1 = {}
        const obj2 = { a: "abc" }
        const isNotSameObject = new ObjectValidator().equalsNoneOf(obj1, obj2).seal()
        expect(isNotSameObject(123)).toBeFalsy()
        expect(isNotSameObject(obj1)).toBeFalsy()
        expect(isNotSameObject(obj2)).toBeFalsy()
        expect(isNotSameObject({})).toBeTruthy()
        expect(isNotSameObject({ ...obj1 })).toBeTruthy()
    })
    it("equalsOneOf", () => {
        const obj1 = {}
        const obj2 = { a: "abc" }
        const isSameObject = new ObjectValidator().equalsOneOf(obj1, obj2).seal()
        expect(isSameObject(123)).toBeFalsy()
        expect(isSameObject({})).toBeFalsy()
        expect(isSameObject({ ...obj1 })).toBeFalsy()
        expect(isSameObject(obj1)).toBeTruthy()
        expect(isSameObject(obj2)).toBeTruthy()
    })
    describe("map", () => {
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
    it("mapPartial", () => {
        const mapsObject = new ObjectValidator<Record<"a" | "b", number>>().mapPartial({
            a: new NumberValidator().equals(1).seal(),
            b: new NumberValidator().equals(2).seal(),
        }).seal()
        expect(mapsObject("abc")).toBeFalsy()
        expect(mapsObject({
            a: 2,
        })).toBeFalsy()
        expect(mapsObject({
            a: "1",
        })).toBeFalsy()
        expect(mapsObject({
            a: 1,
        })).toBeTruthy()
        expect(mapsObject({
            a: 1,
            b: 2,
        })).toBeTruthy()
    })
})
