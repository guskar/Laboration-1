import { ChordCalculator } from './chordCalculator.js'

const chordCalc = new ChordCalculator()

const result = await chordCalc.getChord('F_maj7')
const resultArray = await chordCalc.getChords(['A', 'B', 'C'])
const similarChords = await chordCalc.getSimilarChords('A')
const transposedChords = chordCalc.transposeChords(['Bb', 'D', 'G'], 2)

console.log('result', result)
console.log('resultArray', resultArray)
console.log('similarChords', similarChords)
console.log('transposedChords', transposedChords)
