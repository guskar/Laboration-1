import { ChordProvider } from '../src/js/chordProvider.js'

const chordProvider = new ChordProvider()

try {
  const chord = await chordProvider.getChord('G')
  // const chordString = await chordProvider.getChordAsString('Bb')
  // const chords = await chordProvider.getChords(['G', 'F', 'Ab', 'D', 'E'])
  // const similarChords = await chordProvider.getSimilarChords('A')
  // const transposedChords = chordProvider.getTransposedChords(['Bb', 'D', 'G'], 2)
  // const randomSongStructure = chordProvider.getRandomSongStructure('Db')

  console.log('chord', chord)
  // console.log('chordString', chordString)
  // console.log('chords', chords)
  // console.log('similarChords', similarChords)
  // console.log('transposedChords', transposedChords)
  // console.log('randomSongStructure', randomSongStructure)
} catch (error) {
  console.log(error.message)
}
