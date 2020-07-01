const countAndSay = function(n: number): string {
    if (n === 1) {
        return '1';
    } else {
        return read(countAndSay(n - 1))
    }
}

const read = function(str: string): string {
    const groups = ((s) => {
        const result = [];
        let temp = [];
        for(let i = 0; i < s.length ; i++) {
            if (temp.length === 0 || temp[temp.length - 1] === s.charAt(i)) {
                temp.push(s.charAt(i));
            } else {
                result.push(temp.join(''));
                temp = [];
                temp.push(s.charAt(i));
            }
        }
        if (temp.length != 0) {
            result.push(temp.join(''))
        }
        return result;
    })(str);
    return groups.map(item => `${item.length}${item.charAt(0)}`).join('');
}
