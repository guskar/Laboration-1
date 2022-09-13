import fetch from 'node-fetch'

/**
 *
 */
export class ChordCalculator {
  /**
   *
   */
  constructor () {
    this.chordScale = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
    this.data = {}
  }

/**
 *
 */
  async getChord (chord, presentation) {
    const response = await fetch(`https://api.uberchord.com/v1/chords/${chord}`)
    this.data = await response.json()
    return this.data
  }

  /**
   *
   */
  getChordAsString () {
    let reslutString = ''
    // removes whitespace
    const strings = this.data[0].strings.replaceAll(' ', '')
    for (let i = 0; i < strings.length; i++) {
      if (strings[i] === 'X') {
        reslutString += `String ${i + 1} is not played\n`
      } else if (strings[i] === '0') {
        reslutString += `String ${i + 1} is played open\n`
      } else {
        reslutString += `String ${i + 1} is pressed down on fret nr ${strings[i]}\n`
      }
    }
    return reslutString
  }

  /**
   *
   */
  async getChords (chordsArr) {
    const [ch1, ch2, ch3] = chordsArr
    const response = await fetch(`https://api.uberchord.com/v1/chords/${ch1},${ch2},${ch3}`)
    const json = await response.json()
    return json
  }

  /**
   *
   */
  async getSimilarChords (chord) {
    const response = await fetch(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    const json = await response.json()
    return json
  }

  /**
   *
   */
  transposeChords (chordArr, stepsToTranspose) {
    const transposedChordsArr = []
    chordArr.forEach(element => {
      const index = this.chordScale.indexOf(element) + stepsToTranspose
      const moddedIndex = index % this.chordScale.length
      transposedChordsArr.push(this.chordScale[moddedIndex])
    })

    return transposedChordsArr
  }
}
