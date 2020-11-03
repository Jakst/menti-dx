
// Instructions:
// Replace the use of numberTwo with a number. Notice how the declaration
// of numberTwo gets a darker color above to indicate its not being used.
export const numberThree = 1 + 2

export function add(_uno: number, _tres: number) {
  // The same thing is true for function parameters.
  // Remove dos below to turn the function declaration dark.
  // _tres however, will never turn dark because the underscore
  // tells typescript that it's okay that it's not used.
  return 1 + 2 + 3
}
