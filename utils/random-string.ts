/**
 * Generate a random string of `length` characters
 *
 * Usage:
 * const myString = randomString(15);  // This will give you a random string of 15 characters
 * @param length The length of the string to generate
 * @returns A random string of `length` characters
 */
export function randomString(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }

  return result
}
