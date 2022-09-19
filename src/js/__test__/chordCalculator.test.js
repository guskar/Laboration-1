
import { ChordCalculator } from '../chordCalculator.js'
import { getChordsThatFitsInKey } from '../helperFunctions.js'

test('chordObject assignment', async () => {
  const chordCalculator = new ChordCalculator()
  const chordObject = await chordCalculator.getChord('G')
  expect(chordObject).toEqual([{
    strings: '3 2 0 0 3 3',
    fingering: '2 1 X X 3 4',
    chordName: 'G,,,',
    enharmonicChordName: 'G,,,',
    voicingID: '9223372036958584899',
    tones: 'G,B,D'
  }])
})

test('chordObject assignment to throw error', async () => {
  const chordCalculator = new ChordCalculator()
  await expect(chordCalculator.getChord(1)).rejects.toThrow(Error)
})

test('TwoChordsObject assignment', async () => {
  const chordCalculator = new ChordCalculator()
  const twoChordsObject = await chordCalculator.getChords(['G', 'D'])
  expect(twoChordsObject).toEqual([
    {
      strings: '3 2 0 0 3 3',
      fingering: '2 1 X X 3 4',
      chordName: 'G,,,',
      enharmonicChordName: 'G,,,',
      voicingID: '9223372036958584899',
      tones: 'G,B,D'
    },
    {
      strings: 'X X 0 2 3 2',
      fingering: 'X X X 1 3 2',
      chordName: 'D,,,',
      enharmonicChordName: 'D,,,',
      voicingID: '9223372036925096959',
      tones: 'D,F#,A'
    }
  ])
})

test('TwoChordsObject assignment to throw error', async () => {
  const chordCalculator = new ChordCalculator()
  await expect(chordCalculator.getChords([])).rejects.toThrow(Error)
})

test('chordString assignment', async () => {
  const chordCalculator = new ChordCalculator()
  const chordString = await chordCalculator.getChordAsString('G')
  expect(chordString).toContain('String nr: 1 is pressed down on fret nr: 3 by your middlefinger\nString nr: 2 is pressed down on fret nr: 2 by your pointerfinger\nString nr: 3 is played open\nString nr: 4 is played open\nString nr: 5 is pressed down on fret nr: 3 by your ringfinger\nString nr: 6 is pressed down on fret nr: 3 by your littlefinger')
})

test('chordstring assignment to throw error', async () => {
  const chordCalculator = new ChordCalculator()
  await expect(chordCalculator.getChordAsString(1)).rejects.toThrow(Error)
})

test('transposedChordsArray assignment', () => {
  const chordCalculator = new ChordCalculator()
  const chordObject = chordCalculator.transposeChords(['Bb', 'D', 'G'], 2)
  expect(chordObject).toEqual(['C', 'E', 'A'])
})

test('transposedChordsArray assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.transposeChords([])).toThrow(Error)
})

test('songStructureObject assignment', () => {
  const chordCalculator = new ChordCalculator()
  const chordObject = chordCalculator.getRandomSongStructure('C')
  expect(chordObject).toHaveProperty('verse', 'refrain', 'bridge')
})

test('songStructureObject assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.getRandomSongStructure(1)).toThrow(Error)
})

test('chordsThatFitsInKeyArray assignment', () => {
  const chordsThatFitsInKey = getChordsThatFitsInKey('C')
  expect(chordsThatFitsInKey).toEqual(['C', 'F', 'G', 'A_m'])
})

test('chordsThatFitsInKeyArray assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.getChordsThatFitsInKey(1)).toThrow(Error)
})
