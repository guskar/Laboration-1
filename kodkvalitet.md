## Clean Code kapitel 2: meningsfulla namn

| Namn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **chordProvider** - Klassnamn på huvudmodul. |  **Class Names** - Klassnamnet är ett substantiv enligt Clean Code.
| **getTransposedChords** - metod som transponerar ackorden som skickas in som argument. |  **Method names** - Metodnamnen ska enligt Clean code ha verb som namn och det följer jag genomgående i mina metodnamn.
| **getChord** - metod som fetchar ett API och sedan returnerar javascript object bestående av ett ackord. |  **Pick one word per concept** - Namnet getChord följer egentligen inte konceptet "Pick one word per consept" då metoden i sig använder sig av en fetcher så egentligen kanske fetchChord skulle kunna vara ett mer passande namn.
| **indexOfKeyChord** - Variabel som används för att kontrollera vilket index vi vill plocka ut ur en array. |  **Add Meaningfull Context** - Här hade jag kunnat döpa variabeln till index men för att följa regeln kring detta i Clean code så använder jag ett namn som svarar på frågor kring vad variabeln har för funktion i metoden och för att det kanske inte är självklart vilket index vi pratar om.
| **errorCheckString** - Validerar om input är av typen string. |  **Descreiptive names** - Här tycker jag att namnet istället skulle kunna vara validateArray då namnet beskriver bättre vad metoden fasktiskt gör. Check skulle dessutom kunna ses som ett salangord vilket vi ska undvika enligt avsnittet **Don´t be cute**
| **keyChord** - Namn på argument som skickas till flera metoder. | **Avoid Disinformation** - Att namnet har ordet key i sig skulle kunna vara förvirrande då key är ett variabelnamn som används av programmerare men som i detta fall refererar till "tonart" som är något specifikt för området musikteori. Därför bör detta specificeras i en ordlista. Ett annat namn som blir förvirrande är strings när vi talar om gitarrsträngar.


## Clean Code kapitel 3: funktioner

| Metodnamn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **getRandomSongStructure** - Metoden returnerar ett sångobject med slumpvis utvalda ackord i tonarten. |  **Do one thing** - I Clean code nämns att en metod bara ska göra en sak. Den här metoden gör både validering av input och plockar ut ackord i rätt tonart samt skapar och returnerar ett object. Därmed gör metoden fler saker och bryter mot denna regel.
| **createChordStructureObject** - Formaterar ett object av den array som skickas in som argument. |  **Small** - Enligt författarens egna reflektioner kring funktioner så ska dessa vara så små som möjligt. Gärna minder än 20 rader kod. Detta tycker jag att jag följer men däremot hade den i efterhand kunnat göras ännu mindre. Den gör dessutom lite för många saker på en gång, då den ansvarar både för att slumpvis välja ut tal och sedan formatera objektet.
| **errorCheckArray** - metod som hanterar validering av input. |  **Error Handling Is One Thing** - I Clean code berättas att även error handling är en sak. Med andra ord ska den metoden bara ha det ansvaret och det har jag löst med att jag har en ErrorHandler klass som enbart sköter validering av input.
| **getRandomSongStructure** - Skapar och returnerar ett formaterat slumpis skapat sångobjekt. |  **Dont repeat yourself** - Här känns koden något upprepande vilket Clean code tar upp som något en i alla lägen ska undvika. Kanske hade jag kunnat undvika detta genom att låta min errorHandler själv anropa flera olika valideringsmetoder istället.
| **getChordsThatFitsInKey** - Plockar ut ackord i rätt tonart utifrån input. |  **Blocks and indenting** - I Clean code tar författaren upp att det inuti exempelvis en if sats bara böra finnas en rad kod och att detta gärna får vara ett funktionsanrop. Den här regeln följs inte i denna funktion. Visserligen är koden relativt kort men problemet hade kunnat lösas genom att bryta ut koden i ännu fler små funktioner för att göra det hela tydligare.