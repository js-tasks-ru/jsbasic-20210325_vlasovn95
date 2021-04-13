function factorial(n) {
  if (n == 0 || n == 1) {
    return 1
  }

  let result = n

  for (let x = n - 1; x > 0; x--) {
    result *= x
  }

  return result
}