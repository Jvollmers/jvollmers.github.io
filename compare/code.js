function get_max (){
// get numbers from input box
let a = document.getElementById("i1").valueAsNumber
let b = document.getElementById("i2").valueAsNumber
let c = document.getElementById("i3").valueAsNumber
// compare numbers
let max = a
if (b > max) {
    max = b
}
if (c > max){
    max = c
}
//display the max
document.getelementbyid("max").innerHtml = max
}
document.getelementbyid("b1").addEventListener("click", get_max)
