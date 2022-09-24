
import { ChordProvider } from '../chordProvider.js'
import { createChordsThatFitsInKeyArr } from '../helperFunctions.js'

const chordProvider = new ChordProvider()

test('chordObject assignment', async () => {
  const chordObject = await chordProvider.getChord('G')
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
  await expect(chordProvider.getChord(1)).rejects.toThrow(Error)
})

test('TwoChordsObject assignment', async () => {
  const twoChordsObject = await chordProvider.getChords(['G', 'D'])
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
  await expect(chordProvider.getChords([])).rejects.toThrow(Error)
})

test('chordString assignment', async () => {
  const chordString = await chordProvider.getChordAsString('Bb')
  expect(chordString).toContain('String nr: 1 is not played\nPlace your pointerfinger on string nr: 2 on fret nr: 1\nPlace your middlefinger on string nr: 3 on fret nr: 3\nPlace your ringfinger on string nr: 4 on fret nr: 3\nPlace your littlefinger on string nr: 5 on fret nr: 3\nPlace your pointerfinger on string nr: 6 on fret nr: 1')
})

test('chordstring assignment to throw error', async () => {
  await expect(chordProvider.getChordAsString(1)).rejects.toThrow(Error)
})

test('transposedChordsArray assignment', () => {
  const chordObject = chordProvider.getTransposedChords(['Bb', 'D', 'G'], 2)
  expect(chordObject).toEqual(['C', 'E', 'A'])
})

test('transposedChordsArray assignment to throw error', () => {
  expect(() => chordProvider.getTransposedChords([])).toThrow(Error)
})

test('songStructureObject assignment', () => {
  const chordObject = chordProvider.getRandomSongStructure('C')
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
  expect(() => chordProvider.getRandomSongStructure(1)).toThrow(Error)
})

test('chordsThatFitsInKeyArray assignment', () => {
  const chordsThatFitsInKey = createChordsThatFitsInKeyArr('C')
  expect(chordsThatFitsInKey).toEqual(['C', 'F', 'G', 'A_m'])
})

test('chordsThatFitsInKeyArray assignment to throw error', () => {
  expect(() => chordProvider.getChordsThatFitsInKey(1)).toThrow(Error)
})
