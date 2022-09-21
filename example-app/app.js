import { ChordCalculator } from '../src/js/chordCalculator.js'

const chordCalculator = new ChordCalculator()

try {
  // const chord = await chordCalculator.getChord('G')
  // const chordString = await chordCalculator.getChordAsString('Bb')
  // const chords = await chordCalculator.getChords(['G', 'F', 'Ab'])
  // const similarChords = await chordCalculator.getSimilarChords('A')
  // const transposedChords = chordCalculator.transposeChords(['Bb', 'D', 'G'], 4)
  const randomSongStructure = chordCalculator.getRandomSongStructure('F')

  // console.log('chord', chord)
  // console.log('chordString', chordString)
  // console.log('chords', chords)
  // console.log('similarChords', similarChords)
  // console.log('transposedChords', transposedChords)
  console.log('randomSongStructure', randomSongStructure)
} catch (error) {
  console.log(error.message)
}
