function Chrono() {
    var minutes = 0;
    var secondes = 0;
    var milsec = 0;
    var currentTime;
    this.start = function () {
        currentTime = setInterval(function (){console.log(secondes++);}, 1000);
        document.getElementsByName("sec").innerHTML = "0";
            if (secondes > 59){
                secondes = 0;
                setInterval(function(){console.log(":" +minutes++);}, 60000);
            }
        };
    
    this.pause = function () {
        clearInterval(currentTime);
    };
    this.stop = function () {
        clearInterval(currentTime);
    };
}


var chrono = new Chrono();
chrono.start();
chrono.stop();