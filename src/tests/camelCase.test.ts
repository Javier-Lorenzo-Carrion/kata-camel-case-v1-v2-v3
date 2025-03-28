import {toUpperCamelCaseV1, toUpperCamelCaseV2} from "../core/camelCase";

describe("To upper camel case version 1 should ", () => {
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCaseV1("")).toBe("");
    });
    it("return a string: when the initial sentence is: ", ()=>{
        expect(toUpperCamelCaseV1(" ")).toBe(" ");
    });
    it("return a string: Hola when the initial sentence is: hola", ()=>{
        expect(toUpperCamelCaseV1("hola")).toBe("Hola");
    });
    it("return a string: Hola when the initial sentence is: HoLa", ()=>{
        expect(toUpperCamelCaseV1("HoLa")).toBe("Hola");
    });
    it("return a string: SoyJavier when the initial sentence is: SOY-JAVIER", ()=>{
        expect(toUpperCamelCaseV1("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola_SOY-JAVIER", ()=>{
        expect(toUpperCamelCaseV1("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola SOY-_JAVIER", ()=>{
        expect(toUpperCamelCaseV1("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola SOY-_JAVIER", ()=>{
        expect(toUpperCamelCaseV1("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})

describe("To upper camel case version 2 should", () => {
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCaseV2("")).toBe("");
    });
    it("version 2 should return a string:  when the initial sentence is: ", ()=>{
        expect(toUpperCamelCaseV2(" ")).toBe(" ");
    });
    it("return a string: Hola when the initial sentence is: hola", ()=>{
        expect(toUpperCamelCaseV2("hola")).toBe("Hola");
    });
    it("return a string: Hola when the initial sentence is: HoLa", ()=>{
        expect(toUpperCamelCaseV2("HoLa")).toBe("Hola");
    });
    it("return a string: SoyJavier when the initial sentence is: SOY-JAVIER", ()=>{
        expect(toUpperCamelCaseV2("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola_SOY-JAVIER", ()=>{
        expect(toUpperCamelCaseV2("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola SOY-_JAVIER", ()=>{
        expect(toUpperCamelCaseV2("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
    it("return a string: HolaSoyJavier when the initial sentence is: hola SOY-_JAVIER", ()=>{
        expect(toUpperCamelCaseV2("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    });
})