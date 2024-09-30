//Temperature Converter

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

// function convert(){
//     if(toFahrenheit.checked){

//     }
//     else if(toCelsius.checked){

//     }
//     else{
//         result.textContent = "select a unit";
//     }
    
// }

function convert() {
    //float values
    temp = parseFloat(textBox.value);
    
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (toFahrenheit.checked) {
        // Celsius to Fahrenheit
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(2) +"°F";
    } 
    else if (toCelsius.checked) {
        //Fahrenheit to Celsius
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) +"°C";
    } 
    else {
        result.textContent = "Select a unit";
    }
}

