
export const FINGERS_ENUM = Object.freeze({
  1: 'pointerfinger',
  2: 'middlefinger',
  3: 'ringfinger',
  4: 'littlefinger'

})

export const CHORD_SCALE = Object.freeze(['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'])

/**
 * Finds chords to match keychord.
 *
 * @param { string } keyChord - The chord to find suitable chords in key for.
 * @returns {string[]} - the array of chords that fits in key
 */
export function createChordsThatFitsInKeyArr (keyChord) {
  const chordsThatFitsInKey = []
  const indexForKeyChord = CHORD_SCALE.indexOf(keyChord)

  // incrementor added to control what elements we want to pick in the CHORD_SCALE array.
  let incrementor = indexForKeyChord
  for (let i = 0; i < 4; i++) {
    chordsThatFitsInKey.push(CHORD_SCALE[incrementor])
    if (incrementor === indexForKeyChord) {
      incrementor = (incrementor + 5) % CHORD_SCALE.length
    } else {
      incrementor = (incrementor + 2) % CHORD_SCALE.length
    }
  }
  // Makes the element at that position a minor chord since it has to fit in the key chosen by the user.
  chordsThatFitsInKey[3] = `${chordsThatFitsInKey[3]}_m`
  return chordsThatFitsInKey
}

/**
 * Transposes the chords sent in to the method.
 *
 * @param {string[]} chordArr - The array of chords to transpose.
 * @param {number} stepsToTranspose - number of steps to transpose.
 * @returns {string[]} - the array of transposed chords.
 */
export function createTransposedChordsArr (chordArr, stepsToTranspose) {
  const transposedChordsArr = []

  chordArr.forEach(element => {
    const transposeIndex = CHORD_SCALE.indexOf(element) + stepsToTranspose
    // meddedIndex added to controll that index cant go out of range
    const moddedIndex = transposeIndex % CHORD_SCALE.length
    transposedChordsArr.push(CHORD_SCALE[moddedIndex])
  })
  return transposedChordsArr
}

/**
 * Creating a songStructureObject.
 *
 * @param {string[]} chordsArr - Array of chords.
 * @returns {object} - The songStructureObject to be returned.
 */
export function createChordStructureObject (chordsArr) {
  const songStructureObject = { verse: [], refrain: [], bridge: [] }

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chordsArr.length)
    if (songStructureObject.verse.length < 4) {
      songStructureObject.verse.push(chordsArr[randomIndex])
    } else if (songStructureObject.refrain.length < 4) {
      songStructureObject.refrain.push(chordsArr[randomIndex])
    } else {
      songStructureObject.bridge.push(chordsArr[randomIndex])
    }
  }
  return songStructureObject
}

/**
 * Responsible for formating a string from chordobject returned from the api.
 *
 * @param {object} data - the data to transform to string.
 * @returns {string} - the formated string.
 */
export function createStringFromChordObject (data) {
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
      chordString += `Place your ${FINGERS_ENUM[fingers[i]]} on string nr: ${i + 1} on fret nr: ${guitarStrings[i]}\n`
    }
  }
  return chordString
}
