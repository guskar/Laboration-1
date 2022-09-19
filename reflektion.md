# Reflektion
Min första tanke när jag såg hur denna kursen var upplagd var att det här verkligen är ett område jag behöver lära mig/veta mer om. Kurslitterasturen är tydlig och lättläst och efter att ha läst kapitel 2 och 3 känns det som att jag fick en bra grund till att veta hur jag skulle lägga upp det hela. Det finns också en hel del regler att förhålla sig till vilket känns kul och utmanande. Visserligen har delar av detta tagits upp i tidigare kurser men att nu få fokusera mer på detta känns intressant då stor del legat på att få ihop själva koden.

Bara att komma fram till vilken typ av bibliotek jag ville bygga tog mig några dagar. I efterhand upplever jag att jag börjat i fel ände då jag utgick ifrån att göra en webbkomponent som vi jobbat med i tidigare kurser. Detta gjorde att jag blev för fokuserad på vad som skulle renderas för användaren i ett användargränssnitt. Efter att ha reflekterat lite kring detta ändrade jag mig till att istället utgå från att skapa ett bibliotek, vilket i nästa steg skulle kunna användas av en utvecklare, för att rendera informationen som returneras. Den insikten gjorde det lättare att veta var jag skulle börja med uppgiften. Det blev också lättare med testning av bibliotekets funktioner.

Något jag lärt mig av den här laborationen är att dela upp koden i mindre metoder. Att de metoder som finns på min huvudklass helt enkelt i stort sett bara anropar andra helperFunctions vilket gör det tydligare vad mina huvudmetoder gör. I kombination med tydlig namngivning tycker jag att jag lyckats med detta utifrån den nivå jag ligger på nu.

Namnändringar på funktioner och variabler har också naturligare under kodningens gång då det blir tydligare vad varje metod gör och inte gör.

Vad det gäller abstraktionsnivåer som tas upp i boken tycker jag ibland att det är svårt att hålla sig till detta. I min kod blandar jag exempelvis olika koncept såsom att slumpa nummer och formatera ett objekt jag vill returnera i samma metod. Så där finns det absolut mer att göra vad det gäller att bryta ut kod.



## Clean Code, kapitel 2: meningsfulla namn

| Namn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **chordCalculator** - Klassnamn på huvudmodul. | - **Class Names** - Klassnamnet är ett substantiv enligt Clean Code. Dock är namnet inte exemlariskt eftersom klassen gör betydligt mer än räknar ackord.
| **transposeChords** - metod som transponerar ackorden som skickas in som argument. | - **Method names** - Metodnamnen ska enligt Clean code ha verb som namn och det följer jag genomgående i mina metodnamn.
| **getChord** - metod som fetchar ett API och sedan returnerar json. | - **Pick one word per concept** - Namnet getChord följer egentligen inte konceptet "Pick one word per consept" då metoden i sig använder sig av en fetcher så egentligen kanske fetchChord skulle kunna vara ett mer passande namn.
| **chordTransposer** - Metod som transponerar ackorden i en array som skickas in av användaren. | - **Method names** - Här bryter jag mot regeln att ett metodnamn ska vara ett verb. Namnet hade därmed varit ett bättre namn på en klass. 
| **errorCheckString** - Validerar om input är en string. | - **Descreiptive names** - Här tycker jag att namnet istället skulle kunna vara validateArray då namnet beskriver bättre vad metoden fasktiskt gör.
| **keyChord** - Namn på argument som skickas till flera metoder. | **Avoid Disinformation** - Att namnet har ordet key i sig skulle kunna vara förvirrande då key är ett variabelnamn som används av programmerare men som i detta fall refererar till "tonart" som är något specifikt för området musikteori. Därför bör detta specificeras i en ordlista.
***

## Clean Code, kapitel 3: funktioner

| Metodnamn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **getRandomSongStructure** - Metoden returnerar ett songobject med slumpvis utvalda ackord i tonarten. | - **Do one thing** - I Clean code nämns att en metod bara ska göra en sak. Den här metoden gör både validering av input och plockar ut ackord i rätt tonart samt skapar och returnerar ett object. Därmed gör metoden fler saker och bryter mot denna regel.
| **createChordStructureObject** - Formaterar ett object av den array som skickas in som argument. | - **Small** - Enligt författarens egna reflektioner kring funktioner så ska dessa vara så små som möjligt. Gärna minder än 20 rader kod. Detta tycker jag att jag följer men däremot hade den i efterhand kunnat göras ännu mindre. Den gör dessutom lite för många saker på en gång, då den ansvarar både för att slumpvis välja ut tal och sedan formatera objektet.
| **saveSong** - Sparar ett skapat sångobject och returnerar url till sången. | - **Function Arguments** - Enligt Clean code så är det idealiska antalet argument 0 (niladic) och 3 argument (triadic) bör då alltså undvikas i största möjliga mån. i denna funktion hade jag dock svårt att komma på ett annat sätt att spara sången annat än att skicka in 3 st argument då dessa behövs för att skapa objektet. Men i efterhand så hade detta såklart kunna lösas genom att jag skickar in ett objekt med all information som argument.
| **getRandomSongStructure** - Skapar och returnerar ett formaterat slumpis skapat sångobjekt. | - **Dont repeat yourself** - Här känns koden något upprepande vilket Clean code tar upp som något en i alla lägen ska undvika. Kanske hade jag kunnat undvika detta genom att låta min errorHandler själv anropa flera olika valideringsmetoder istället.
| **getChordsThatFitsInKey** - Plockar ut ackord i rätt tonart utifrån input. | - **Blocks and indenting** - I Clean code tar författaren upp att det inuti exempelvis en if sats bara böra finnas en rad kod och att detta gärna får vara ett funktionsanrop. Den här regeln följs inte i denna funktion. Visserligen är koden relativt kort men problemet hade kunnat lösas genom att bryta ut koden i ännu fler små funktioner för att göra det hela tydligare.