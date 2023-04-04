let counter = document.querySelector(".counter");
let counter1 = document.querySelector(".counter1");
let counter2 = document.querySelector(".counter2");
let dem1 = 0;
let dem2 = 0;
let dem3 = 0;
const myInterval = setInterval(myTimer, 17);
const myInterval2 = setInterval(myTimer2, 17);
const myInterval3 = setInterval(myTimer3, 17);
function myTimer() {
    dem1++;
    counter.innerHTML = dem1;
    if (dem1 >= 86) {
        myStop();
    }
}
function myTimer2() {
    dem2++;
    counter1.innerHTML = dem2;
    if (dem2 >= 77) {
        myStop2();
    }
}
function myTimer3() {
    dem3++;
    counter2.innerHTML = dem3;
    if (dem3 >= 80) {
        myStop3();
    }
}
function myStop() {
    clearInterval(myInterval);
}
function myStop2() {
    clearInterval(myInterval2);
}
function myStop3() {
    clearInterval(myInterval3);
}
