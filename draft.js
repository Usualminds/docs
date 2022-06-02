// 递归实现两个整数的乘积，要求不使用‘*’号（即乘号）

function get(n) {
    let arr = [], init = 1, startX = Math.ceil(n / 2), startY = Math.ceil(n / 2)

    // init value
    arr[startX, startY] = [init]

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            if (j === startX + 1) {
                arr.push()
            }
        }
    }

}


console.log(getMultiply(2, 2))