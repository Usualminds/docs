# 数组

## 移除元素
[👉 Leetcode 链接-27](https://leetcode.cn/problems/remove-element/)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

### 简单解法
```ts
function removeElement(nums: number[], val: number): number {
    const len = nums.length

    if(len === 0) return 0

    let j = 0

    for(let i=0;i<len;i++){
        if(val !== nums[i]){
            nums[j] = nums[i]
            j++
        }
    }

    return j
};
```
### 双指针
```ts
function removeElement(nums: number[], val: number): number {
    let left = 0, right = nums.length - 1

    while(left <= right){
        if(val === nums[left]){
            nums[left] = nums[right]
            right--
        } else{
            left++
        }
    }

    return left
};
```

## 移动零
[👉 Leetcode 链接-283](https://leetcode.cn/problems/move-zeroes/)

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

```ts
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    let len = nums.length;

    for(let i=0;i<len;i++){
        if(nums[i]!==0){
            nums[index++] = nums[i];
        }
    }

    while(index < nums.length){
        nums[index++] = 0
    }
};
```

```ts
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[j] = nums[i]
            j++
        }
    }

    for(let i=j;i<nums.length;i++){
        nums[i] = 0
    }
};
```

## 比较含退格的字符串
[👉 Leetcode 链接-844](https://leetcode.cn/problems/backspace-string-compare/)
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

```ts
function backspaceCompare(s: string, t: string): boolean {
    let rs = getString(s), rt = getString(t)

    return rs === rt
};

function getString(s: string): string{
    let temp = []

    for(let item of s){
        if(item === '#'){
            temp.pop()
        } else {
            temp.push(item)
        }
    }

    return temp.join('')
}

// 计数器解法，计数器 count, 遇到 # +1，count > 0, next  
```

## 长度最小的子数组

### 子数组
[👉 Leetcode 链接- 209](https://leetcode.cn/problems/minimum-size-subarray-sum/)

给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

```ts
function minSubArrayLen(target: number, nums: number[]): number {
    let results = Infinity, sum = 0, i = 0, subLen = 0, len = nums.length

    for(let j=0;j<len;j++){
        sum += nums[j]

        while(sum >= target){
            subLen = j - i + 1
            results = results < subLen ? results : subLen
            sum -= nums[i]
            i++
        }
    }

    return results === Infinity ? 0 : results
};
```

### 水果成篮
[👉 Leetcode 链接-904](https://leetcode.cn/problems/fruit-into-baskets/)

你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。

你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。
```ts
function totalFruit(fruits: number[]): number {
    let left = 0, subLen = 0, count = 0, container = [fruits[left]]

    for(let right = 0; right < fruits.length;right++){
        let fruit = fruits[right]

        if(!container.includes(fruit)){
            if(container.length < 2) {
                container[1] = fruit
            } else {
                left = count

                container[0] = fruits[right-1]
                container[1] = fruits[right]
            }
        }

        if(fruits[count] !== fruits[right]) {
            count = right
        }

        subLen = Math.max(subLen, right - left + 1)
    }

    return subLen
};
```

### 最小覆盖子串
[👉 Leetcode 链接-76](https://leetcode.cn/problems/minimum-window-substring/)

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

```ts
function minWindow(s: string, t: string): string {
    let left = 0, right = 0, map = new Map()

    for(let char of t){
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    let type = map.size, results = ''

    while(right < s.length){
        let char = s[right]

        if(map.has(char)){
            map.set(char, map.get(char) - 1)
        }

        if(map.get(char) === 0) type--


        while(type === 0) {
            let newRes = s.substring(left, right + 1)

            if(!results || newRes.length < results.length) results = newRes

            let charLeft = s[left]

            if(map.has(charLeft)){
                map.set(charLeft, map.get(charLeft) + 1)
                if(map.get(charLeft) === 1) type++
            }

            left++
        }

        right++
    }

    return results
};
```

## 螺旋矩阵 I
[👉 Leetcode 链接-54](https://leetcode.cn/problems/spiral-matrix/)

给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
```ts
function spiralOrder(matrix: number[][]): number[] {
    const rows = matrix.length, colunms = matrix[0].length
    let left = 0, right = colunms - 1, top = 0, bottom = rows - 1, res = []

    while(left<=right && top <= bottom){
        for(let i=left;i<=right;i++) {
            res.push(matrix[top][i])
        }

        for(let i=top+1;i<=bottom;i++){
            res.push(matrix[i][right])
        }

        if(left<right && top<bottom){
            for(let i=right-1;i>left;i--){
                res.push(matrix[bottom][i])
            }

            for(let i=bottom;i>top;i--){
                res.push(matrix[i][left])
            }
        }

        [left, top, right, bottom] = [left+1, top+1, right-1, bottom-1]
    }

    return res
};
```

## 螺旋矩阵 II
[👉 Leetcode 链接-59]([螺旋矩阵 II](https://leetcode.cn/problems/spiral-matrix-ii/))

### 按层模拟
```ts
function generateMatrix(n: number): number[][] {
    // start position
    let startX = 0, startY = 0

    // loop times && middle postion
    let loop = Math.floor(n / 2), middle = Math.floor(n / 2)

    // controling loop size
    let offset = 1

    // update count
    let count = 1

    // make [][]
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))

    while(loop--){
        let row = startX, column = startY

        // rules: [)
        // top: left to right
        for(;column < startY + n - offset; column++){
            res[row][column] = count++
        }

        // right: top to bottom
        for(;row < startX + n - offset; row++){
            res[row][column] = count++
        }

        // bottom: right to left
        for(;column > startY; column--){
            res[row][column] = count++
        }

        // left: bottom to top
        for(;row > startX; row--){
            res[row][column] = count++
        }

        // row && colunm increase
        startX++
        startY++

        // offset increase
        offset += 2
    }

    // if odd
    if(n & 1){
        res[middle][middle] = count
    }

    return res
};
```

### 模拟
```ts
function generateMatrix(n: number): number[][] {
    let left = 0, right = n - 1, top = 0, bottom = n - 1
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count = 1

    while(count <= n * n){
        for(let i=left;i<=right;i++,count++) res[top][i] = count
        top++

        for(let i=top;i<=bottom;i++,count++) res[i][right] = count
        right--

        for(let i=right;i>=left;i--,count++) res[bottom][i] = count
        bottom--

        for(let i=bottom;i>=top;i--,count++) res[i][left] = count
        left++
    }

    return res
};
```