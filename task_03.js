let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//2

function ex2(){
    if(inputs[0].value.includes('@')){
        results[1].textContent = "@ знайдено!! Довжина email - " + inputs[0].value.length
    }
    else{
        results[1].textContent = "@ не знайдено!! Напишіть email правильно."
    }
}


