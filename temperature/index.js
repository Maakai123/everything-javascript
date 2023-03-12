const celsiusEL = document.getElementById("celsius")
const fahrenheitEL = document.getElementById("fahrenheit")
const kelvinEL = document.getElementById("kelvin")


function computeTemp(event) {
    const currentValue = +event.target.value 
    //+ sign will wont allow a string, only numbers will be allowed
   switch (event.target.name) {
    case "celsius":
         kelvinEL.value = (currentValue + 273.32).toFixed(2)
         fahrenheitEL.value = (currentValue * 1.8 + 32).toFixed(2)        
        break;
    case "fahrenheight":
        celsiusEL.value = ((currentValue - 32) / 1.8).toFixed(2)
        kelvinEL.value = ((currentValue - 32)/ 1.8 + 273.32).toFixed(2)
        break;
    case "kelvin":
        celsiusEL.value = (currentValue - 273.32).toFixed(2)
        fahrenheitEL.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2)  
        break; 
    default:
        break;
   } 
}