
import { ChordCalculator } from '../chordCalculator.js'
import { CHORD_SCALE, createChordsThatFitsInKeyArr } from '../helperFunctions.js'

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
  const chordString = await chordCalculator.getChordAsString('Bb')
  expect(chordString).toContain('String nr: 1 is not played\nPlace your pointerfinger on string nr: 2 on fret nr: 1\nPlace your middlefinger on string nr: 3 on fret nr: 3\nPlace your ringfinger on string nr: 4 on fret nr: 3\nPlace your littlefinger on string nr: 5 on fret nr: 3\nPlace your pointerfinger on string nr: 6 on fret nr: 1')
})

test('chordstring assignment to throw error', async () => {
  const chordCalculator = new ChordCalculator()
  await expect(chordCalculator.getChordAsString(1)).rejects.toThrow(Error)
})

test('transposedChordsArray assignment', () => {
  const chordCalculator = new ChordCalculator()
  const chordObject = chordCalculator.getTransposedChords(['Bb', 'D', 'G'], 2)
  expect(chordObject).toEqual(['C', 'E', 'A'])
})

test('transposedChordsArray assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.getTransposedChords([])).toThrow(Error)
})

test('songStructureObject assignment', () => {
  const chordCalculator = new ChordCalculator()
  const chordObject = chordCalculator.getRandomSongStructure('C')
  const chordsThatFitsInKeyArray = createChordsThatFitsInKeyArr('C')
  const values = Object.keys(chordObject)
  for (const value in values) {
    for (let i = 0; i < value.length; i++) {
      expect(() => values.some(chordsThatFitsInKeyArray)).toBeTruthy()
    }
  }
  expect(chordObject).toHaveProperty('verse', 'refrain', 'bridge')
})

test('songStructureObject assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.getRandomSongStructure(1)).toThrow(Error)
})

test('chordsThatFitsInKeyArray assignment', () => {
  const chordsThatFitsInKey = createChordsThatFitsInKeyArr('C')
  expect(chordsThatFitsInKey).toEqual(['C', 'F', 'G', 'A_m'])
})

test('chordsThatFitsInKeyArray assignment to throw error', () => {
  const chordCalculator = new ChordCalculator()
  expect(() => chordCalculator.getChordsThatFitsInKey(1)).toThrow(Error)
})
