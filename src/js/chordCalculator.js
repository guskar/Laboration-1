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
  }

/**
 *
 */
  async getChord (chord) {
    const response = await fetch(`https://api.uberchord.com/v1/chords/${chord}`)
    const json = await response.json()
    return json
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
    console.log(this.chordScale.length)
    const transposedChordsArr = []
    chordArr.forEach(element => {
      const index = this.chordScale.indexOf(element) + stepsToTranspose
      const moddedIndex = index % this.chordScale.length
      transposedChordsArr.push(this.chordScale[moddedIndex])
    })

    return transposedChordsArr
  }
}
