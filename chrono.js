function Chrono() {
    let minutes = 0;
    let secondes = 0;
    let dixiemes = 0;
    this.start = function () {
        dixiemes++
        if (dixiemes > 9) {
            dixiemes = 0;
            secondes++
        }
        if (secondes > 59) {
            secondes = 0;
            minutes++
        }
        document.forsec.mil.value = " " + dixiemes //on affiche les dixièmes
        document.forsec.sec.value = " " + secondes //on affiche les secondes
        document.forsec.min.value = " " + minutes //on affiche les minutes
        compte = setTimeout('chrono()', 100) //la fonction est relancéetous les 10° de secondes
        console.log(dixiemes)
    }
    this.pause = function () {

    }
    this.pause = function () {

    }
}