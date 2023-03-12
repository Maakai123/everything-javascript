const btnEL = document.getElementById("btn")
const bmiResultEL = document.getElementById("bmi-result")
const weightConditionEL = document.getElementById("weight-condition");



function calculateBMI() {
   //convert height to meter by dividing by 100
    const heightValue = document.getElementById("height").value/100
    const weightValue = document.getElementById("weight").value
   console.log(heightValue, weightValue)

   const bmiValue = weightValue /(heightValue * heightValue)
   //weight/ height square
   console.log(bmiValue);
   //note without value it wont display
   bmiResultEL.value = bmiValue

   if(bmiValue < 18.5){
    weightConditionEL.textContent = " You are Under weight"
    weightConditionEL.style.color = "red"
   } else if(bmiValue >= 18.5 && bmiValue <= 24.9 ) {
    weightConditionEL.textContent = " Normal weight"
    weightConditionEL.style.color = "red"
   }  else if(bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEL.textContent = " Over Weight"
    weightConditionEL.style.color = "red"
   } else if (bmiValue >= 30) {
    weightConditionEL.textContent = " Obesity"
    weightConditionEL.style.color = "red"
   }
}


btnEL.addEventListener("click", calculateBMI)