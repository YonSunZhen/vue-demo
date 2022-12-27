const defs = {}

const escapeDeadCycle = (fn, num = 30) => {
  let n = 0

  return (...args) => {
    if (n > num) return {}
    n++

    const res = fn(...args)

    return res
  }
}

Object.keys(defs).forEach((key) => {
  defs[key] = escapeDeadCycle(defs[key])
})

export default {}
