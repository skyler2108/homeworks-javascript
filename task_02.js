let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")
function ex2(){
    let m = +inputs[0].value
    results[0].textContent = m * 24 + " год. " + m * 24 * 60 + " хв." 
}