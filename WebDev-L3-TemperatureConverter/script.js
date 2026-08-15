const input = document.getElementById("tempInput");
const unit = document.getElementById("unit");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const error = document.getElementById("error");
const indicator = document.getElementById("tempIndicator");

function convert(){
    let value = parseFloat(input.value);

    if(isNaN(value)){
        error.innerText = "Enter valid number";
        return;
    }

    let c,f,k;

    if(unit.value === "c"){
        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;
    } else if(unit.value === "f"){
        c = (value - 32) * 5/9;
        f = value;
        k = c + 273.15;
    } else{
        k = value;
        c = value - 273.15;
        f = (c * 9/5) + 32;
    }

    if(c < -273.15){
        error.innerText = "Below absolute zero!";
        return;
    }

    error.innerText = "";

    celsius.innerText = c.toFixed(2);
    fahrenheit.innerText = f.toFixed(2);
    kelvin.innerText = k.toFixed(2);

    updateBar(c);
}

function updateBar(temp){
    let percent = (temp + 100) / 200;
    percent = Math.max(0, Math.min(1, percent));
    indicator.style.width = (percent * 100) + "%";
}

input.addEventListener("input", convert);
unit.addEventListener("change", convert);