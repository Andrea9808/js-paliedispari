//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//Dichiariamo chi ha vinto.


//dichiarato bottone
const button = document.getElementById("button");

//al click del bottone
button.addEventListener("click",

    function () {

        //dichiarato utente
        //chiediamo all'utente un numero cha va da 1 a 5
        const userNumber = parseInt(document.getElementById("inputnumber").value);
        console.log("user " + userNumber);

        //dichiarato computer
        let computerNumber = numRandom(1, 5);
        console.log("computer " + computerNumber);


        //creo una funzione che indica i numeri randomici del computer
        function numRandom(min, max) {

            const randomNumComp = Math.floor(Math.random() * (max - min) + min);

            return randomNumComp;

        }

        //faccio la somma tra i due numeri (utente e computer)
        let somma = userNumber + computerNumber;
        console.log("Somma: " + somma);

        // funzione per determinare se un numero è pari o dispari
        function pariODispari(numero) {

            if (numero % 2 === 0) {

                return "la somma è pari";

            } else {

                return "la somma è dispari";
            }
        }


        // determino se la somma è pari o dispari usando la funzione
        const sommaRisultato = pariODispari(somma);


        console.log(sommaRisultato);

        document.getElementById("choicecomputer").innerHTML = "Il Computer sceglie: " + computerNumber;
        document.getElementById("output").innerHTML = sommaRisultato;


        // confronto la scelta dell'utente con il risultato della somma
        if(sommaRisultato === "la somma è pari" && userNumber % 2 === 0){

            document.getElementById("vincitore").innerHTML = "Hai vinto!!"

        }else if(sommaRisultato === "la somma è dispari" && userNumber % 2 !== 0){

            document.getElementById("vincitore").innerHTML = "Hai vinto!!"

        }else{

            document.getElementById("vincitore").innerHTML = "Ha vinto il Computer!!"

        }
    
    }
)


