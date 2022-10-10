
/**
 * The ChordPicker class of the application.
 */
export class ChordPicker {
  CHORD_SCALE

  /**
   * The constructor of the ChordPicker class.
   */
  constructor () {
    this.CHORD_SCALE = Object.freeze(['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'])
  }

  /**
   * Finds chords to match keychord.
   *
   * @param { string } keyChord - The chord to find suitable chords in key for.
   * @returns {string[]} - the array of chords that fits in key
   */
  createChordsThatFitsInKeyArr (keyChord) {
    const chordsThatFitsInKey = []
    const indexForKeyChord = this.CHORD_SCALE.indexOf(keyChord)

    // incrementor added to control what elements we want to pick in the CHORD_SCALE array.
    let incrementor = indexForKeyChord
    for (let i = 0; i < 4; i++) {
      chordsThatFitsInKey.push(this.CHORD_SCALE[incrementor])
      if (incrementor === indexForKeyChord) {
        incrementor = (incrementor + 5) % this.CHORD_SCALE.length
      } else {
        incrementor = (incrementor + 2) % this.CHORD_SCALE.length
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
  createTransposedChordsArr (chordArr, stepsToTranspose) {
    const transposedChordsArr = []

    chordArr.forEach(element => {
      const transposeIndex = this.CHORD_SCALE.indexOf(element) + stepsToTranspose
      // meddedIndex added to controll that index cant go out of range
      const moddedIndex = transposeIndex % this.CHORD_SCALE.length
      transposedChordsArr.push(this.CHORD_SCALE[moddedIndex])
    })
    return transposedChordsArr
  }

  /**
   * Creating a songStructureObject.
   *
   * @param {string[]} chordsArr - Array of chords.
   * @returns {object} - The songStructureObject to be returned.
   */
  createChordStructureObject (chordsArr) {
    const songStructureObject = { verse: [], chorus: [], bridge: [] }

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chordsArr.length)
      if (songStructureObject.verse.length < 4) {
        songStructureObject.verse.push(chordsArr[randomIndex])
      } else if (songStructureObject.chorus.length < 4) {
        songStructureObject.chorus.push(chordsArr[randomIndex])
      } else {
        songStructureObject.bridge.push(chordsArr[randomIndex])
      }
    }
    return songStructureObject
  }
}
