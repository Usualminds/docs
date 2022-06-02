// 递归实现两个整数的乘积，要求不使用‘*’号（即乘号）
let res = 0
function getMultiply(a: number, b: number): number {

    if (b) {
        res += getMultiply(a, b--)
    } else {
        return res
    }
}
