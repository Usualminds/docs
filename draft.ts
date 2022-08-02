function longestValidParentheses(s: string): number {
    let stack = [-1], max = 0, len = s.length

    for (let i = 0; i < len; i++) {
        let char = s.charAt(i)
        if (char === '(') {
            stack.push(i)
        } else {
            stack.pop()

            if (stack.length === 0) {
                stack.push(i)
            } else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }

    return max
};