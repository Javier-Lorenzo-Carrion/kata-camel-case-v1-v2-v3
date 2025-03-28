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