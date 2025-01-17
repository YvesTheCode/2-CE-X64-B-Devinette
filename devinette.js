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

// const text = document.getElementById("text");
const butt = document.getElementById("butt");
const repond = document.getElementById("repond");
// const indice = document.getElementById("indice");
// const essais = document.getElementById("essais");

let ligne = ["ligne0",ligne1, ligne2, ligne3, ligne4, ligne5, ligne6, ligne7, ligne8, ligne9, ligne10, ligne11, ligne12, ligne13, ligne14, ligne15, ligne16, ligne17]

ligne[2].innerHTML="Bienvenue au jeu de devinette de nombre !"
ligne[4].innerHTML ="Il se trouve entre "+min+" & "+max
butt.value=""



butt.addEventListener("click",function(){

    let tonchoix = repond.value

    ++tentative

    alert(nombreMystere)
    if (isNaN(tonchoix)) {
        ligne[2].innerHTML="Devinette de >>>NOMBRE<<<"
        ligne[4].innerHTML="Trop nul"
    } 

    else if (repond.value.trim() === ""){
        ligne[2].innerHTML="Faut répondre par contre."
        ligne[4].innerHTML=">:("
        --tentative
    }

    else if(tonchoix < nombreMystere){

        ligne[2].innerHTML="Ce n'est pas "+tonchoix+", re-tente."
        ligne[4].innerHTML= "Trop petit"

    }

    else if(tonchoix > nombreMystere){
        ligne[2].innerHTML="Ce n'est pas "+tonchoix+", re-tente."
        ligne[4].innerHTML="Trop grand"
    }

    else {
        min = Math.floor(Math.random() * 99) + 1;
        max = Math.floor(Math.random() * 101) + 100;
        ligne[2].innerHTML="Tu as trouvé en seulement "+ tentative +" tentatives. Rejoue dés maintenant !"
        ligne[4].innerHTML="Le nouveau nombre se trouve entre "+min+" & "+max
        nombreMystere = Math.floor(Math.random() * (max-min + 1)) + min;
        tentative=0
        alert(nombreMystere)
    }
        ligne[16].innerHTML = "Nombre d'essais : "+tentative
});

// let hp = 20
// let maxhp = 20

// let boucle = setInterval(() => {
 
//   if (hp<=0) {
//     setTimeout(() => {
//       maxhp = maxhp+20
//       hpbar.style.width = 100+"%"
//       hp = maxhp
//     }, 0);
//   }

//   hp = hp-5
//   hpbar.style.width = (hp/maxhp)*100+"%"


// }, 1000);
