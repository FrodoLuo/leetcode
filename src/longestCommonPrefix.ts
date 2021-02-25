const longestCommonPrefix = function(strs: string[]): string {
    if (strs.length === 0) {return ''}
    if (strs.length === 1) {return strs[0]}

    const firstBuild = (strA: string, strB: string): string[] => {
        const result = [];
        for (let i = 0; i < strA.length; i++ ) {
            if (strA.charAt(i) === strB.charAt(i)) {
                result.push(strA.charAt(i))
            } else {
                return result;
            }
        }
        return result;
    }

    let result = firstBuild(strs[0], strs[1]);

    const rest = strs.slice(2);

    for(let i = 0; i < rest.length; i++) {
        const currentStr = rest[i];
        const iteraorCount = Math.min(currentStr.length, result.length);
        for (let j = 0; j < iteraorCount; j++) {
            if (currentStr.charAt(j) !== result[j]) {
                result = result.slice(0, j)
                break;
            }
        }
        if (result.length <= 0) {
            return '';
        }
        if (result.length > currentStr.length) {
            result = currentStr.split('')
        }
    }

    return result.join('')
}
