const strStr = function (haystack: string, needle: string): number {
    if (needle.length < 1) {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            for (let probe = 0; probe < needle.length; probe++) {
                if (haystack.charAt(i + probe) !== needle.charAt(probe)) {
                    break;
                } else if (probe === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
}