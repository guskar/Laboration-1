
/**
 * The StringFormatter class.
 */
export class StringFormatter {
  FINGERS_ENUM = Object.freeze({
    1: 'pointerfinger',
    2: 'middlefinger',
    3: 'ringfinger',
    4: 'littlefinger'

  })

  /**
   * Formats a string with chordinstructions for user.
   *
   * @param {object} data - the input to search for.
   * @returns {string} String representing the chord to be returned.
   */
  createStringFromChordObject (data) {
    let chordString = ''
    // removes whitespace
    const guitarStrings = data[0].strings.replaceAll(' ', '')
    const fingers = data[0].fingering.replaceAll(' ', '')

    for (let i = 0; i < guitarStrings.length; i++) {
      if (guitarStrings[i] === 'X') {
        chordString += `String nr: ${i + 1} is not played\n`
      } else if (guitarStrings[i] === '0') {
        chordString += `String nr: ${i + 1} is played open\n`
      } else {
        chordString += `Place your ${this.FINGERS_ENUM[fingers[i]]} on string nr: ${i + 1} on fret nr: ${guitarStrings[i]}\n`
      }
    }
    return chordString
  }
}
