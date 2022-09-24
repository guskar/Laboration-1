# Chord-Calculator

Chord-calcualtor is a module that handles guitar chords. It uses https://api.uberchord.com/ to fetch chords and deliver them as javascript objects.
The module also provides the possibility for you to get the chord as a string with instructions (if you are a beginner in learning guitar), transpose chords to a new key and create a random song containing only chords in the key you choose.

Chords to choose as input are:  
```
//helferFunctions.js
CHORD_SCALE = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
```

## Specific music terms:
<ul>
  <li>Chord: Ackord(sammansättning av flera toner)</li>
  <li>Key: Tonart(Tonart, en uppsättning toner (skala) där en av tonerna har rollen som grundton.)</li>
  <li>String: gitarrsträng</li>
  <li>Fret: Greppband(metallband längs greppbrädet på gitarren)</li>
   <li>Transpose: Transponera(Transponering av musik innebär att man flyttar en fras, del av stycke eller hela verk uppåt eller nedåt i tonhöjd så att de inbördes intervallen inte ändras men hela området byter tonart.)</li>
</ul>


## Installation

```
npm install
```
## Run example-app

```
npm start
```

## Dependencies

```
"dependencies": {
    "jest": "^29.0.3",
    "node-fetch": "^3.2.10"
  }
```

## Usage

The module fetches data from https://api.uberchord.com/ and presents it as Javascript objects.
Example shows import from app.js in the example-app folder.

````
import { ChordCalculator } from '../src/js/chordCalculator.js'

const chordCalculator = new ChordCalculator()


  const chord = await chordCalculator.getChord('G')
  

  console.log('chord', chord)
  

````
# Methods to use

## getChord

---
The method fetches the api and returns it as a javascript object.
 
Params:
string: A string representing the chord to fetch

Throws:
Error Will be thrown if argument is not of type string/isn´t in CHORD_SCALE.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  const chord = await chordCalculator.getChord('G')
  console.log('chord', chord)
 
 ````
 ## getChords

---
The method fetches the api and for maximum 3 chords and returns an array with chord-objects.
 
Params:
string[]: An array of strings representing the chords to fetch.

Throws:
Error Will be thrown if the array is empty/has more tha three elements/if the elements isn´t in CHORD_SCALE.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  const chords = await chordCalculator.getChords(['G', 'D', 'Ab'])
  console.log('chords', chords)
 
 ````
 ## getChordAsString

---
The method fetches the api and and coverts the chord-object to a string of instructions.
 
Params:
string: A string representing the chord to fetch.

Throws:
Error Will be thrown if argument is not of type string/isn´t in CHORD_SCALE.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  const chordString = await chordCalculator.getChordAsString('Bb')
  console.log('chordString', chordString)
 
 ````
 ## getSimilarChords

---
The method fetches the api and returns it as a javascript object containing similar chords.
 
Params:
string: A string representing the chord to get similar chords for.

Throws:
Error Will be thrown if argument is not of type string/isn´t in CHORD_SCALE.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  const similarChords = await chordCalculator.getSimilarChords('A')
  console.log('similarChords', similarChords)
 
 ````
 ## transposeChords

---
The method transposes the chordarray sent in as argument.
 
Params:
string[]: An array of strings representing the chords to transpose.
number: A number representing number of steps to transpose chords.

Throws:
Error Will be thrown if argument is not of type array/array is empty/chords isn´t in CHORD-SCALE/isn´t of type number between 1-11.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  const transposedChords = chordCalculator.transposeChords(['Bb', 'D', 'G'], 3)
  console.log('transposedChords', transposedChords)
 
 ````
 ## getRandomSongStructure

---
The method returns a random-song-object based on the key sent in as argument.
 
Params:
string: A string representing the key to get a random song-structure for.

Throws:
Error Will be thrown if argument is not of type string/isn´t in CHORD_SCALE.

### Example

 ````
  const chordCalculator = new ChordCalculator()
  randomSongStructure = chordCalculator.getRandomSongStructure('C')
  console.log('randomSongStructure', randomSongStructure)
 
 ````



