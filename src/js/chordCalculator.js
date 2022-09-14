
import { Fetcher } from './fetcher.js'

/**
 *
 */
export class ChordCalculator {
  /**
   *
   */
  constructor () {
    this.fetcher = new Fetcher()
    this.CHORD_SCALE = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
    this.data = {}
  }

/**
 *
 */
  async getChord (chord) {
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
    return this.data
  }

  /**
   *
   */
  async getChordAsString (chord) {
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${chord}`)
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
        reslutString += `String nr: ${i + 1} is pressed down on fret nr: ${strings[i]} by finger nr: ${fingers[i]}\n`
      }
    }
    return reslutString
  }

  /**
   *
   */
  async getChords (chordsArr) {
    const [ch1, ch2, ch3] = chordsArr
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords/${ch1},${ch2},${ch3}`)
    return this.data
    // const response = await fetch(`https://api.uberchord.com/v1/chords/${ch1},${ch2},${ch3}`)
    // const json = await response.json()
    // return json
  }

  /**
   *
   */
  async getSimilarChords (chord) {
    this.data = await this.fetcher.fetchData(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    return this.data
  }

  /**
   *
   */
  transposeChords (chordArr, stepsToTranspose) {
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
   *
   */
  getRandomSongStructure (keyChord) {
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
   *
   */
  createChordStructureObject (chordsArr) {
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
}
