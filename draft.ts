function minSubsequence(nums: number[]): number[] {
    let res = [], sum = getSum(nums), len = nums.length, temp = 0

    nums.sort((a, b) => b - a)

    for (let i = 0; i < len; i++) {
        temp += nums[i]
        res.push(nums[i])

        if (temp * 2 > sum) {
            break
        }
    }

    return res
};

function getSum(nums: number[]) {
    return nums.reduce((pre, cur) => pre + cur)
}