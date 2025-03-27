import {toUpperCamelCaseV1} from "../core/camelCaseV1";

describe("To upper camel case should", () => {
    it("return a string: when the initial sentence is:", ()=>{
        expect(toUpperCamelCaseV1("")).toBe("");
    });
    it("return a string:  when the initial sentence is: ", ()=>{
        expect(toUpperCamelCaseV1(" ")).toBe(" ");
    });
    it("return a string: Hola when the initial sentence is: hola", ()=>{
        expect(toUpperCamelCaseV1("hola")).toBe("Hola");
    });
})