function convert(s: string, numRows: number): string {
    if (numRows === 1) return s

    const sLen = s.length
    let len = Math.min(sLen, numRows), rows = []

    for (let i = 0; i < len; i++) {
        rows[i] = ''
    }

    let start = 0, flag = false

    for (let char of s) {
        rows[start] += char

        if (start === 0 || start === numRows - 1) {
            flag = !flag
        }

        start += flag ? 1 : -1
    }

    let res = ''

    for (let row of rows) {
        res += row
    }

    return res
};