import { ChordCalculator } from './chordCalculator.js'

const chordCalculator = new ChordCalculator()

try {
  // const chord = await chordCalculator.getChord(1)
  // const chordString = await chordCalculator.getChordAsString(1)
  const chords = await chordCalculator.getChords([])
  // const similarChords = await chordCalculator.getSimilarChords('A')
  // const transposedChords = chordCalculator.transposeChords(['Bb', 'D', 'G'], 3)
  // const randomSongStructure = chordCalculator.getRandomSongStructure('C')

  // console.log('chord', chord)
  // console.log(chordString)
  console.log('chords', chords)
  // console.log('similarChords', similarChords)
  // console.log('transposedChords', transposedChords)
  // console.log('randomSongStructure', randomSongStructure)
} catch (error) {
  console.log(error.message)
}
