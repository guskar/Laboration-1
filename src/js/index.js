import { ChordCalculator } from './chordCalculator.js'

const chordCalculator = new ChordCalculator()

const chord = await chordCalculator.getChord('G')
const chordAsText = chordCalculator.getChordAsString('G')
const resultArray = await chordCalculator.getChords(['A', 'B', 'C'])
const similarChords = await chordCalculator.getSimilarChords('A')
const transposedChords = chordCalculator.transposeChords(['Bb', 'D', 'G'], 2)

console.log(chord)
console.log(chordAsText)
// console.log('resultArray', resultArray)
// console.log('similarChords', similarChords)
// console.log('transposedChords', transposedChords)
