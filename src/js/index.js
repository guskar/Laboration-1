import { ChordCalculator } from './chordCalculator.js'

const chordCalculator = new ChordCalculator()

// const chord = await chordCalculator.getChord('G')
// const chordString = await chordCalculator.getChordAsString('G')
// const chords = await chordCalculator.getChords(['A', 'B', 'C'])
const similarChords = await chordCalculator.getSimilarChords('A')
const transposedChords = chordCalculator.transposeChords(['Bb', 'D', 'G'], 3)
// const randomSongStructure = chordCalculator.getRandomSongStructure('C')

// console.log('chord', chord)
// console.log(chordString)
// console.log('chords', chords)
console.log('similarChords', similarChords)
console.log('transposedChords', transposedChords)
//console.log('randomSongStructure', randomSongStructure)
