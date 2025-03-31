export function toUpperCamelCaseV1(text: string): string {
    if(text === " ") return text;
    let separatedWordsByHyphen:string [] = text.split(/[-_\s]+/);
    let joinedText: string = "";
    for(let i = 0; i < text.split(/[-_\s]+/).length; i++){
        let firstLetterToUpperCase: string = separatedWordsByHyphen[i].charAt(0).toUpperCase();
        let lowerCaseWord:string = separatedWordsByHyphen[i].toLowerCase();
        joinedText = joinedText + firstLetterToUpperCase + lowerCaseWord.substring(1);
    }
    return joinedText;
}

export function toUpperCamelCaseV2(text:string): string{
    if(text === " ") return text;
    let lettersToArray: string [] = [];
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i) === "-" || text.charAt(i) === "_" || text.charAt(i) === " "){
            if(text.charAt(i+1) === "-" || text.charAt(i+1) === "_" || text.charAt(i+1) === " "){
            } else {
                lettersToArray.push(text.charAt(i+1).toUpperCase());
                i++;
            }
        } else {
            lettersToArray.push(text.charAt(i).toLowerCase());
        }
    }
    let ArrayToText: string = lettersToArray.join("");
    return ArrayToText.charAt(0).toUpperCase() + ArrayToText.substring(1);
}

export function toUpperCamelCaseV3(text:string): string{
    if(text === " ") return text;
    let textInLowerCase: string = text.toLowerCase();
    let formatedText: string = textInLowerCase.charAt(0).toUpperCase() + textInLowerCase.substring(1);
    return formatedText;
}