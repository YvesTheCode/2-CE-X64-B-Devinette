// alert("Bienvenue au jeu de devinette de nombre !");
// let min = 1;
// let max = 100;
// const nombreMystere = Math.floor(Math.random() * max) + min; // Nombre entre 1 et 100
// let tentative = 0;
// let deviner = false;

// while (!deviner) {
//   const reponse = prompt("Devinez un nombre entre " + min + " et " + max);
//   tentative++;

//   if (reponse === null) {
//     alert("Jeu annulé. Merci d'avoir joué !");
//     break;
//   }

//   const nombre = parseInt(reponse, 10);

//   if (isNaN(nombre)) {
//     alert("Ce n'est pas un nombre valide. Veuillez réessayer !");
//   } else if (nombre < nombreMystere) {
//     alert("C'est plus !");
//   } else if (nombre > nombreMystere) {
//     alert("C'est moins !");
//   } else {
//     alert(
//       `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`
//     );
//     deviner = true;
//   }
// }

let min = 1;
let max = 100;
let nombreMystere = Math.floor(Math.random() * max) + min;
let tentative = 0;

const text = document.getElementById("text");
const butt = document.getElementById("butt");
const repond = document.getElementById("repond");
const indice = document.getElementById("indice");
const essais = document.getElementById("essais");

text.textContent="Bienvenue au jeu de devinette de nombre !"
indice.textContent ="Il se trouve entre "+min+" & "+max
butt.value=""



butt.addEventListener("click",function(){

    const tonchoix = repond.value

    ++tentative

    // alert(nombreMystere)
    if (isNaN(tonchoix)) {
        text.textContent="Devinette de >>>NOMBRE<<<"
        indice.textContent="Trop nul"
    } 
    
    else if(tonchoix < nombreMystere){
        indice.textContent="trop petit"
    }

    else if(tonchoix > nombreMystere){
        indice.textContent="trop grand"
    }

    else {
        text.innerHTML="Tu as trouvé en seulement "+ tentative +" tentatives.<br> Rejoue dés maintenant !"
        indice.textContent="Trop fort"
        nombreMystere = Math.floor(Math.random() * max) + min;
        tentative=0
        // alert(nombreMystere)
    }
        essais.textContent = "Nombre d'essais : "+tentative
});
