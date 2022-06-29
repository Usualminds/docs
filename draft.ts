function fourSum(nums: number[], target: number): number[][] {
    const len = nums.length

    if (len < 4) return []

    nums.sort((a, b) => a - b)

    let res = []

    for (let i = 0; i < len - 3; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            for (let j = i + 1; j < len - 2; j++) {
                if (j === i + 1 || nums[j] !== nums[j - 1]) {
                    let left = j + 1, right = len - 1

                    while (left < right) {
                        let sum = nums[i] + nums[j] + nums[left] + nums[right]

                        if (sum < target) { left++; continue }
                        if (sum > target) { right--; continue }
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
                        while (left < right && nums[left] === nums[++left]);
                        while (left < right && nums[right] === nums[--right]);
                    }
                }
            }
        }
    }

    return res
};