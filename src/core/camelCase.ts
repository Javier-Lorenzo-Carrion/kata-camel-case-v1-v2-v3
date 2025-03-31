export function toUpperCamelCaseV1(text: string): string {
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
    let searchedValues: RegExp = /(?:^|[-_\s]+)(\w)/g;
    return text
        .trim()
        .toLowerCase()
        .replace(searchedValues, (_, firstLetter) => firstLetter.toUpperCase());
}