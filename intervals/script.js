// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

let timer = setInterval(function() {
    time++;
    counterElement.innerHTML = time;
}, 1000);


