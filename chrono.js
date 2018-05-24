function Chrono() {
    let minutes = 0;
    let secondes = 0;
    let milsec = 0;
    this.start = function () {
        milsec++
        if (milsec > 9) {
            milsec = 0;
            secondes++
        }
        if (secondes > 59) {
            secondes = 0;
            minutes++
        }
        console.log(milsec)
    }
    this.pause = function () {

    }
    this.pause = function () {

    }
}