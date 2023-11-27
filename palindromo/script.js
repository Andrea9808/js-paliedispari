//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma



//dichiaro il bottone
const bottone = document.getElementById("button");



//creo la funzione (nel caso di riutilizzo)
function parolaPalindroma(stringToCheck){

    //in questo caso ho dichiarato stringaInversa che mi riportera la stringa appunto in:
    //.split = la stringa verrà scompattata in un array
    //.reverse = l' array verrà invertito
    //.join = l'array invertito verrà stampato nuovamente in stringa
    let stringaInversa = stringToCheck.split("").reverse().join("");
    return stringaInversa;
    
}


bottone.addEventListener("click",

    function(){
        
    //dichiaro l'input all'interno del click
    const parola = document.getElementById("parolaInput").value;

    //chiamo la funzione e dichiaro il risultato nella variabile parolaInversa 
    //(applicato all'interno del click)
    let parolaInversa = parolaPalindroma(parola);

    
    //creo una condizione: se la parola sarà palindroma o no
    let output;

    if(parola == parolaInversa){
        output = "la parola è palindroma";
    } else {
        output = "la parola non è palindroma";
    }

        //scrivo all'interno dell'html
        document.getElementById("output").innerHTML = output;
    }

)



