// --------------------------------------------------------
// TYPE DECLARATIONS

let num: number
type Binary = 0 | 1

interface Tree {
  name: string
}

// --------------------------------------------------------
// TYPE ASSERTIONS

const any = 4 as any

function isNumber(str: unknown): str is string {
  return typeof str === 'string'
}

function assertsNumber(str: unknown): asserts str is string {
  if (typeof str !== 'string') {
    throw new Error('ohno')
  }
}
