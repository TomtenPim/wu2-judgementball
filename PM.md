# Judgementball-Databas sammankoppling

Simon Mikael Ågren | 2003-05-03

## Inledning

Målet med detta arbeta var att implementera ett highscore system för mitt phaser3 spel Judgementball, och utifall det fanns mer tid, en game over screen, start meny, nya golvvarianter och nya banor. Hur det skulle gå till att koppla spelet med min databas vart (och är) jag aldrig riktigt säker på då mina ursprungliga idéer visade sig ofunktionella.

## Bakgrund

Detta projekt har bestått avfyra olika delar:

* Första delen var att planera själva projektet. Den planen går att se i plan.md, och själva planerande gick utan större problem  

* Andra var att börja arbeta på första delarna i min plan. Här började problemen. Min ursprungliga lösning var att pröva skriva mysql querys direkt i min phaser 3 kod. Detta fungerade ej varpå jag försökte sammankoppla phaser3 spelet med ett av min tidigare projekt som hade funktionella querys i hopp om att det skulle fungera, något det inte heller gjorde. 

* Tredje delen var den jobbigaste och längsta. Den bestod av att söka potentielal lösningar på hur man kan hämta och skicka data från Phaser3, lösningen jag hittade blev nekad av Jens som rekomnderade att använda fetch till elelr med en API som är det som skulle interagera med själva databasen. Det svåraste var att förstå delarna som krävdes för den lösning Jens förklarade. Jag arbetade under denna tid på det jag trodde var steg åt rätt håll utifrån det jag läst.  

* Sista delen var att hoasta det lilla jag fått gjort på netlify och glitch samt skriva PM


## Positiva erfarenheter

Jag är nöjd att mon nodekomponent kan hämta data från min databas, dden skickar också datan i önskad årdning utofrån min querys så det är kul. Jag bör fortsätta med korrekta querys. 

## Negativa erfarenheter

Det mesta i all ärlighet. Försökte leta fram potentiella lösningar då min ursprungliga idé inte fungerade, blev tillsagd att jag inte skulle använda det jag hittat utan något annat, försökte förstå mig på det nya och blev mestadels bara förvirrad och frustrerad. Ytterligare kontakt med handledare hade varit vettigt för att lättare förstå given uppgift för att på vettigt sätt kunna böra arbeta på uppgiften. Även vettigt att inte ha ett gymansiearbete eller arbete av liknande vikt över sig när man ska sätta sig in i något man inte riktigt har någon koll på. Den extra stressen ökar risk för frustration vilket i sin tur minskar sanorlikeheten för lärande. Utöver det har det förvärrat effekten av distraktionsmoment då jag haft mindre energi kvar att motstå dem.

## Sammanfattning

Jag är inte nöjd, varken med slutresultatet eller min insats. Jag har inte lyckats sammankoppla de två delarna vilket rör de första och andra stegen i planeringen. Det jag har åstakommit på denna tid är ett spel som redan fungerade och ett nodeprojekt som kan hämta data från min databas. Jag skulle gissa att det kommande steget skulle vart att sammankoppla den med spelet, men jag är inte säker. 

Med mer tid skulle jag kunan svaret på den frågan och utifrån det antingen forstsätta leta lösningar eller gå vidare och börja göra något med datan.