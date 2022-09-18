
export const FINGERS_ENUM = {
  1: 'pointerfinger',
  2: 'middlefinger',
  3: 'ringfinger',
  4: 'littlefinger'

}

export const CHORD_SCALE = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']

export const songStructureObject = { verse: [], refrain: [], bridge: [] }

export function getChordsThatFitsInKey (keyChord) {
  const chordsThatFitsInKey = []
  const indexForKeyChord = CHORD_SCALE.indexOf(keyChord)
  // Added to control what elements we want to pick in the CHORD_SCALE array.
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

export function chordTransposer (chordArr, stepsToTranspose) {
  const transposedChordsArr = []
  chordArr.forEach(element => {
    const index = CHORD_SCALE.indexOf(element) + stepsToTranspose
    // what if index goes out of range
    const moddedIndex = index % CHORD_SCALE.length
    transposedChordsArr.push(CHORD_SCALE[moddedIndex])
  })
  return transposedChordsArr
}

export function createChordStructureObject (chordsArr) {
  const songStructureObject = { verse: [], refrain: [], bridge: [] }
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * chordsArr.length)
    if (songStructureObject.verse.length < 4) {
      songStructureObject.verse.push(chordsArr[index])
    } else if (songStructureObject.refrain.length < 4) {
      songStructureObject.refrain.push(chordsArr[index])
    } else {
      songStructureObject.bridge.push(chordsArr[index])
    }
  }
  return songStructureObject
}

/**
 * Responsible for formating a string frpm chordobject returned from the api.
 *
 * @param {object} data - the data to transform to string.
 * @returns {string} - the formated string.
 */
export function createStringFromChordObject (data) {
  let reslutString = ''
  // removes whitespace
  const strings = data[0].strings.replaceAll(' ', '')
  const fingers = data[0].fingering.replaceAll(' ', '')

  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === 'X') {
      reslutString += `String nr: ${i + 1} is not played\n`
    } else if (strings[i] === '0') {
      reslutString += `String nr: ${i + 1} is played open\n`
    } else {
      reslutString += `String nr: ${i + 1} is pressed down on fret nr: ${strings[i]} by your ${FINGERS_ENUM[fingers[i]]}\n`
    }
  }
  return reslutString
}
