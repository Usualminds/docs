function reformat(s: string): string {
    let nums = '0123456789', abcArr = [], numsArr = []

    // 先分类字母和数字
    for (let char of s) {
        if (nums.includes(char)) {
            numsArr.push(char)
        } else {
            abcArr.push(char)
        }
    }

    let abcLen = abcArr.length, numsLen = numsArr.length

    // 判断有一个类型为空且另一个类型长度大于 1 的，或者某一个类型数字于另一类型长度超过 1 位的
    if (abcLen === 0 && numsLen > 1 || numsLen === 0 && abcLen > 1 || abcLen > (numsLen + 1) || abcLen < (numsLen - 1)) return ''

    let ans = '', len = abcLen > numsLen ? numsLen : abcLen

    // 再逐一合并数字和字符串，这里先默认字符串以数字为首返回
    for (let i = 0; i < len; i++) {
        ans += numsArr[i]
        ans += abcArr[i]
    }

    // 比较返回字符串长度，如果小于两者之和，则说明字符串和数字不等长，会存在以哪个为首的情况
    // 如果是数字长度大于字符串长度，则必须以数字开头，剩余字符直接接在 ans 后
    // 如果是字符串长度大于数字长度，则必须以字符串开头，剩余字符直接接在 ans 首位
    if (ans.length !== (numsLen + abcLen)) {
        if (len >= abcLen) {
            ans += numsArr[numsLen - 1]
        } else {
            ans = abcArr[abcLen - 1] + ans
        }
    }

    return ans
};