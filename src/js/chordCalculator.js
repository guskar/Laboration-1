
import { Fetcher } from './fetcher.js'
import { ErrorHandler } from './errorHandler.js'
import { createTransposedChordsArr, getChordsThatFitsInKey, createChordStructureObject, createStringFromChordObject } from './helperFunctions.js'

/**
 * The chordCalculator class.
 */
export class ChordCalculator {
  #errorHandler
  #fetcher
  #data
  /**
   * Creates an instance of the current object.
   */
  constructor () {
    this.#errorHandler = new ErrorHandler()
    this.#fetcher = new Fetcher()
    this.#data = {}
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string} chord - the chord to search for.
   */
  async getChord (chord) {
    this.#errorHandler.errorCheckString(chord)
    this.#data = await this.#fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
    return this.#data
  }

  /**
   * Fetches the api creates a string from object and returns the string.
   *
   * @param {string} chord - the input to search for.
   */
  async getChordAsString (chord) {
    this.#errorHandler.errorCheckString(chord)
    this.#data = await this.#fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
    return createStringFromChordObject(this.#data)
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string[]} chordsArr - the input to search for.
   */
  async getChords (chordsArr) {
    let url = 'https://api.uberchord.com/v1/chords/'

    chordsArr.forEach(element => {
      url += `${element},`
    })

    this.#errorHandler.errorCheckArray(chordsArr)
    this.#errorHandler.errorCheckArrayLength(chordsArr)

    this.#data = await this.#fetcher.fetchData(url)
    return this.#data
  }

  /**
   * Fetches the api and returns data.
   *
   * @param {string} chord - the input to search for.
   */
  async getSimilarChords (chord) {
    this.#errorHandler.errorCheckString(chord)

    this.#data = await this.#fetcher.fetchData(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    return this.#data
  }

  /**
   * Transposes the chords sent in by the user.
   *
   * @param {string[]} chordArr - the array of chords to transpose.
   * @param {number} stepsToTranspose - a number representing half tonesteps to transpose chords.
   * @returns {string[]} - the array of transposed chords.
   */
  transposeChords (chordArr, stepsToTranspose) {
    chordArr.forEach(element => {
      this.#errorHandler.errorCheckChord(element)
    })
    this.#errorHandler.errorCheckArray(chordArr)
    this.#errorHandler.errorCheckNumber(stepsToTranspose)
    const transposedChordsArr = createTransposedChordsArr(chordArr, stepsToTranspose)

    return transposedChordsArr
  }

  /**
   * Picks out chords in the right key and creates a song object from it.
   *
   * @param {string} keyChord - The chord to form a songstructure from.
   * @returns {object} - the song object created from the keychord.
   */
  getRandomSongStructure (keyChord) {
    this.#errorHandler.errorCheckChord(keyChord)
    this.#errorHandler.errorCheckString(keyChord)
    const chordsThatFitsInKey = getChordsThatFitsInKey(keyChord)
    const chordStructureObject = createChordStructureObject(chordsThatFitsInKey)

    return chordStructureObject
  }
}
