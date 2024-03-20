import { distance } from "fastest-levenshtein"

const isFuzzyMatch = (str1: string, str2: string) => {
    const treshHold = str2.length - str1.length + 2
    return distance(str1, str2) <= treshHold
}
export default isFuzzyMatch