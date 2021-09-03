/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Aanmaak van  de variabelen.
//Var woorden is het aanmaken van woorden.
//Bij randomWoord wordt er een woord gekozen

var woorden = ['hond', 'pauw', 'beer', 'muis', 'haas', 'mochi', 'koala', 'cake', 'lama', 'hint', 'taxi', 'oase', 'yoga', 'tocht', 'laser','pielen','plexus','zodiak', 'hinten','schuit', 'schijn','sfinx','etui','cacao','curry', 'sambal','aqua', 'uien', 'crisis', 'delict', 'egypte', 'fysiek','niveau','plasma','quizen','uniek','guppie','eczeem','filet','krokus','omelet','zone','baby','rijst','detox','cabaret','schijn','giga','tocht','dieren','gammel','vrezen','carnaval','circus','dak','echt','zijraam','hyacint','bewogen'];
var randomWoord = woorden[Math.floor(woorden.length * Math.random())];
var i;
var position = ['first', 'second', 'third', 'four', 'five','six','seven','eight'];
var letter;
var alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var goedeLetters = 0;
var fouteLetters = 0;
var afgelopen = false;

//Maakt alle letters groot
randomWoord = randomWoord.toUpperCase();

//Console.Log laat het woord zien in de console.
console.log(randomWoord);

//Document.getElementById pakt de afbeelding uit de html code en laat galgje1.png zien.
document.getElementById("afbeelding").src = "images/galgje 1.png";

//Deze loop maakt de letters "_" en zet het op de juiste positie.
for (i = 0; i < randomWoord.length; i++) {
    document.getElementById(position[i]).innerHTML = "_ ";
}

//Hieronder wordt de functie aangemaakt
//letter = this.id = dit is je html element waarop geklikt is.
//(!afgelopen) wordt gebruikt wanneer het woord niet is geraden.
//Doordat afgelopen true is kan het spel niet meer afgespeeld worden.

function guess() {
    if (!afgelopen) {
        var goedeLetter = false;
        letter = this.id;

        var element = document.getElementById(letter);
        element.classList.add("clicked")

        for (i = 0; i < randomWoord.length; i++) {
            if (letter == randomWoord[i]) {
                goedeLetter = true;
                fouteLetters++;
                document.getElementById(position[i]).innerHTML = letter + " ";
            }
        }

        if (fouteLetters == randomWoord.length) {
            afgelopen = true;
            document.getElementById('bericht').innerHTML = "Gewonnen!";
        } else if (!goedeLetter) {
            goedeLetters++;
            document.getElementById("afbeelding").src = "images/galgje " + (goedeLetters + 1) + ".png";
            if (goedeLetters == 10) {
                afgelopen = true;
                document.getElementById('bericht').innerHTML = "Verloren! Het woord was: "+ randomWoord.toLowerCase();
            }
        }
    }
}
for (i = 0; i < alfabet.length; i++) {
    letter = alfabet[i];
    document.getElementById(letter).addEventListener('click', guess);
}

//Bronnen:
//Alyssa Nguyen, 500758876 , klas lila
//Hung Tran (Oom van alyssa): Bijles leraar wiskunde, economie, natuurkunde (voortgezetonderwijs) en programmeren voor (hoger onderwijs). Hij heeft geholpen met de uitleg van de code.
//Les 6 oefenopdracht samen in de les
//Huiswerk opdracht Coin flip.
//Boek JAVASCRIPT & JQUERY interactive front-end web development by Jon Duckett
//Verschillende huiswerkopdrachten bekeken voordat deze code werd geschreven

