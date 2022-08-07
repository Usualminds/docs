function exclusiveTime(n: number, logs: string[]): number[] {
    const stack = [], ans = new Array(n).fill(0)

    for (let log of logs) {
        let logArray = log.split(':'), name = logArray[0], type = logArray[1], time = Number(logArray[2])

        if (type === 'start') {
            if (stack.length) {
                ans[stack[stack.length - 1][0]] += (time - stack[stack.length - 1][1])
                stack[stack.length - 1][1] = time
            }
            stack.push([name, time])
        } else {
            let peek = stack.pop()
            ans[peek[0]] += time - peek[1] + 1

            if (stack.length) {
                stack[stack.length - 1][1] = time + 1
            }

        }

    }

    return ans
};