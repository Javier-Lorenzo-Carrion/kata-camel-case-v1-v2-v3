import {toUpperCamelCaseV2} from "../core/camelCaseV2";

describe("To upper camel version 2 case should", () => {
    it("return a string: when the initial sentence is:", () => {
        expect(toUpperCamelCaseV2("")).toBe("");
    })
    it("return a string:  when the initial sentence is: ", ()=>{
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
})