import {toUpperCamelCaseV1, toUpperCamelCaseV2, toUpperCamelCaseV3} from "../core/camelCase";

describe("To upper camel case version 1 should:", () => {
    it("not convert empty text", ()=>{
        expect(toUpperCamelCaseV1("")).toBe("");
    });
    it("remove blank text", ()=>{
        expect(toUpperCamelCaseV1(" ")).toBe("");
    });
    it("convert a simple word", ()=>{
        expect(toUpperCamelCaseV1("hola")).toBe("Hola");
        expect(toUpperCamelCaseV1("HoLa")).toBe("Hola");
    });
    it("convert phrases", ()=>{
        expect(toUpperCamelCaseV1("hola soy javier")).toBe("HolaSoyJavier")
    })
    it("convert from kebab case", ()=>{
        expect(toUpperCamelCaseV1("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("convert from snake case", ()=>{
        expect(toUpperCamelCaseV1("hola_soy_javier")).toBe("HolaSoyJavier");
    })
    it("convert from multiple format cases", ()=>{
        expect(toUpperCamelCaseV1("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV1("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV1("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    })
})

describe("To upper camel case version 2 should:", () => {
    it("not convert empty text", ()=>{
        expect(toUpperCamelCaseV2("")).toBe("");
    });
    it("remove blank text", ()=>{
        expect(toUpperCamelCaseV2(" ")).toBe("");
    });
    it("convert a simple word", ()=>{
        expect(toUpperCamelCaseV2("hola")).toBe("Hola");
        expect(toUpperCamelCaseV2("HoLa")).toBe("Hola");
    });
    it("convert phrases", ()=>{
        expect(toUpperCamelCaseV2("hola soy javier")).toBe("HolaSoyJavier")
    })
    it("convert from kebab case", ()=>{
        expect(toUpperCamelCaseV2("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("convert from snake case", ()=>{
        expect(toUpperCamelCaseV2("hola_soy_javier")).toBe("HolaSoyJavier");
    })
    it("convert from multiple format cases", ()=>{
        expect(toUpperCamelCaseV2("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV2("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV2("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    })
})

describe("To upper camel case version 3 should:", () => {
    it("not convert empty text", ()=>{
        expect(toUpperCamelCaseV3("")).toBe("");
    });
    it("remove blank text", ()=>{
        expect(toUpperCamelCaseV3(" ")).toBe("");
    });
    it("convert a simple word", ()=>{
        expect(toUpperCamelCaseV3("hola")).toBe("Hola");
        expect(toUpperCamelCaseV3("HoLa")).toBe("Hola");
    });
    it("convert phrases", ()=>{
        expect(toUpperCamelCaseV3("hola soy javier")).toBe("HolaSoyJavier")
    })
    it("convert from kebab case", ()=>{
        expect(toUpperCamelCaseV3("SOY-JAVIER")).toBe("SoyJavier");
    });
    it("convert from snake case", ()=>{
        expect(toUpperCamelCaseV3("hola_soy_javier")).toBe("HolaSoyJavier");
    })
    it("convert from multiple format cases", ()=>{
        expect(toUpperCamelCaseV3("hola_SOY-JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV3("hola SOY-_JAVIER")).toBe("HolaSoyJavier");
        expect(toUpperCamelCaseV3("- _Hola SOY-_JAVIER")).toBe("HolaSoyJavier");
    })
})

