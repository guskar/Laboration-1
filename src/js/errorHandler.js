/**
 * An error class responsible for throwing errors.
 */
export class ErrorHandler {
  /**
   * Cheks if input is of type string.
   *
   * @param {string}inputToCheck - the input value to check.
   */
  errorCheckString (inputToCheck) {
    if (typeof inputToCheck !== 'string') {
      throw new Error(`${inputToCheck} is not a string`)
    }
  }

  /**
   * Checks if input is of type Array and if the array is empty.
   *
   * @param {string[]}inputToCheck - the input value to check.
   */
  errorCheckArray (inputToCheck) {
    if (typeof !inputToCheck.length || Array.isArray(inputToCheck)) {
      throw new Error('The array is empty or isn´t of type array')
    }
  }

  /**
   * Cheks if input is of type number.
   *
   * @param {number}inputToCheck - the input value to check.
   */
  errorCheckNumber (inputToCheck) {
    if (typeof inputToCheck !== 'number') {
      throw new Error(`${inputToCheck} is not a number`)
    }
  }
}