
import { Fetcher } from './fetcher.js'
import { ErrorHandler } from './errorHandler.js'

/**
 *
 */
export class ChordCalculator {
  /**
   * Creates an instance of the current object.
   */
  constructor () {
    this.errorHandler = new ErrorHandler()
    this.fetcher = new Fetcher()
    this.CHORD_SCALE = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
    this.data = {}
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string} chord - the chord to search for.
   */
  async getChord (chord) {
    this.errorHandler.errorCheckString(chord)
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
    return this.data
  }

  /**
   * Fetches the api creates a string from object and returns the string.
   *
   * @param {string} chord - the input to search for.
   */
  async getChordAsString (chord) {
    this.errorHandler.errorCheckString(chord)
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
    return this.createStringFromChordObject()
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string[]} chordsArr - the input to search for.
   */
  async getChords (chordsArr) {
    this.errorHandler.errorCheckArray(chordsArr)

    const [chord1, chord2, chord3] = chordsArr
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord1},${chord2},${chord3}`)
    return this.data
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string} chord - the input to search for.
   */
  async getSimilarChords (chord) {
    this.errorHandler.errorCheckString(chord)

    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    return this.data
  }

  /**
   * Transposes the chords sent in by the user.
   *
   * @param {string[]} chordArr - the array of chords to transpose.
   * @param {number} stepsToTranspose - a number representing half tonesteps to transpose chords.
   * @returns {string[]} - the array of transposed chords.
   */
  transposeChords (chordArr, stepsToTranspose) {
    this.errorHandler.errorCheckArr(chordArr)
    this.errorHandler.errorCheckNumber(stepsToTranspose)

    const transposedChordsArr = []
    chordArr.forEach(element => {
      const index = this.CHORD_SCALE.indexOf(element) + stepsToTranspose
      // what if index goes out of range
      const moddedIndex = index % this.CHORD_SCALE.length
      transposedChordsArr.push(this.CHORD_SCALE[moddedIndex])
    })

    return transposedChordsArr
  }

  /**
   * Picks out chords in the right key and creates a song object from it.
   *
   * @param {string} keyChord - The chord to form a songstructure from.
   * @returns {object} - the song object created from hte keychord.
   */
  getRandomSongStructure (keyChord) {
    this.errorHandler.errorCheckString(keyChord)

    const chordsThatFitsInKey = []
    const indexForKeyChord = this.CHORD_SCALE.indexOf(keyChord)
    // Added to control what elements we want to pick in the CHORD_SCALE array.
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
    return this.createChordStructureObject(chordsThatFitsInKey)
  }

  /**
   * Responsible for creating the songobject.
   *
   * @param {string[]} chordsArr - the chordarray to create a songobject from.
   * @returns {object} - the created songobject to return.
   */
  createChordStructureObject (chordsArr) {
    this.errorHandler.errorCheckArray(chordsArr)
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
   * @returns {string} - the formated string.
   */
  createStringFromChordObject () {
    const FINGERS_ENUM = {
      1: 'pointerfinger',
      2: 'middlefinger',
      3: 'ringfinger',
      4: 'littlefinger'

    }
    let reslutString = ''
    // removes whitespace
    const strings = this.data[0].strings.replaceAll(' ', '')
    const fingers = this.data[0].fingering.replaceAll(' ', '')

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
}
