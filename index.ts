function customSortString(order: string, s: string): string {
  let res = '', map = new Map<string, number>()

  for(let char of s) {
      if(map.has(char)) {
          map.set(char, map.get(char)! + 1)
      } else {
          map.set(char, 1)
      }
  }

  for(let char of order) {
      if(map.has(char)) res += char.repeat(map.get(char)!)
  }
  
  for(let char of s) {
      if(order.indexOf(char) === -1) res += char
  }

  return res
};
