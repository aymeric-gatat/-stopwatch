let chrono = document.getElementById("chrono");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
    if (estArrete) {
        estArrete = false;
        defilertemps()
    }
}

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout)
    }
}

const defilertemps = () => {
    if (estArrete) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    secondes++;

    if (secondes == 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes == 60) {
        heures++;
        minutes = 0;
    }

    //Affichage    

    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (heures < 10) {
        heures = "0" + heures;
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    timeout = setTimeout(defilertemps, 1000);
}

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout = timeout;
}

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset)