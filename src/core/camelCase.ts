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
    let formatedText = "";
    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i) === "-" || text.charAt(i) === " " || text.charAt(i) === "_"){
            formatedText = formatedText + text.charAt(i+1).toUpperCase();
            i++;
        } else{
            formatedText += text.charAt(i).toLowerCase();
        }
    }
    return formatedText.charAt(0).toUpperCase() + formatedText.substring(1);
}