function parseQuery(query: string) {
    if (!query || !query.length) return {}

    const queryObj = {}

    const querys = query.split('&')

    querys.forEach((item) => {
        const [key, value] = item.split('=')

        if (queryObj[key]) {
            if (Array.isArray(queryObj[key])) {
                queryObj[key].push(value)
            } else {
                queryObj[key] = [queryObj[key], value]
            }

        } else {
            queryObj[key] = value
        }

    })
    return queryObj
}

interface T {
    (ok: string): void
    (ok: number): string
}

declare const func: T