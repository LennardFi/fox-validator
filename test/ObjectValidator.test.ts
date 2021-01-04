import { BooleanValidator, NumberValidator, ObjectValidator, OneOfValidator, StringValidator } from "../src"

describe("ObjectValidator", () => {
    it("", () => {
        const isObject = new ObjectValidator().seal()
        expect(isObject(1)).toBeFalsy()
        expect(isObject("1")).toBeFalsy()
        expect(isObject(null)).toBeFalsy()
        expect(isObject({})).toBeTruthy()
    })
    it("dictionaryOf", () => {
        const isNumberDict = new ObjectValidator()
            .dictionaryOf(new NumberValidator().seal())
            .seal()
        expect(isNumberDict({ a: "abc" })).toBeFalsy()
        expect(isNumberDict({ a: "abc", b: 123 })).toBeFalsy()
        expect(isNumberDict({ a: 123 })).toBeTruthy()
        expect(isNumberDict({ a: 123, b: 456 })).toBeTruthy()
        expect(isNumberDict({ a: 123, b: 456 })).toBeTruthy()
        const isStringOrBooleanDict = new ObjectValidator().dictionaryOf(
            new OneOfValidator()
                .oneOf(new StringValidator().seal(), new BooleanValidator().seal())
                .seal())
            .seal()
        expect(isStringOrBooleanDict({ a: 123 })).toBe(false)
        expect(isStringOrBooleanDict({ a: 123, b: [] })).toBe(false)
        expect(isStringOrBooleanDict({ a: "abc", b: [] })).toBe(false)
        expect(isStringOrBooleanDict({ a: false, b: [] })).toBe(false)
        expect(isStringOrBooleanDict({ a: "abc" })).toBe(true)
        expect(isStringOrBooleanDict({ a: false })).toBe(true)
        expect(isStringOrBooleanDict({ a: "abc", b: "def" })).toBe(true)
        expect(isStringOrBooleanDict({ a: "abc", b: true })).toBe(true)
        expect(isStringOrBooleanDict({ a: "abc", b: false })).toBe(true)
        expect(isStringOrBooleanDict({ a: true, b: false })).toBe(true)
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
    it("instanceOf", () => {
        const isDate = new ObjectValidator<Date>().instanceOf(Date).seal()
        expect(isDate("")).toBeFalsy()
        expect(isDate({})).toBeFalsy()
        expect(isDate(new Date())).toBeTruthy()
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
