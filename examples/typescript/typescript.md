# TypeScript Highlighting

```typescript
function joinStrings(strings: string[]): null | string {
  if (!strings) {
    return null
  }

  return strings.join('')
}

const radical = joinStrings(['R', 'a', 'd', 'i', 'c', 'a', 'l'])
```

## --- DECLARATIONS ------------------------------------------------------------

### Readonly declaration with const assertions

```typescript
const radical = ['RADICAL'] as const
```

## --- TYPES -------------------------------------------------------------------

Types are purple category.

Type annotations for variable declarations, function parameters, and return
types are all italicized.

```typescript
let number: undefined | number
```

## --- TYPE ASSERTIONS ---------------------------------------------------------

_Get out of my way compiler!_

### Assertions with `as`

The `as` keyword can be used to create a type assertion

```typescript
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

function(test: { radical: boolean}) {

}
```

### Assertions with generics

```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')
```

### Assertions with non-null assertion operator postfix

```typescript
function liveDangerously(x?: number | null): void {
  console.log(x!.toFixed())
}
```

### Assertions with type predicates

```typescript
function isNumber(input: string | number): input is number {
  return input !== 'ohno'
}

function assertsNumber(input: string | number): asserts input is number {}

const start: Array<string | number> = ['radical', 'hello']
const nums = start.filter(isNumber)
```
