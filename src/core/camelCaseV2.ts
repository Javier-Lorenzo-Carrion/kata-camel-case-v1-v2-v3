export function toUpperCamelCaseV2(text: string): string{
    return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
}