const inputEL = document.getElementById("input")
const errorEL = document.getElementById("error") 
const resultEL = document.getElementById("result")
let errorTime;
let resultTime;
let inputTime;
function updateResults() {
    if(inputEL.value <=0 || isNaN(input.value)) {
        errorEL.textContent = "Please Enter valid Number"
     //set timer for it to disappear
     clearTimeout(errorTime);
     errorTime =  setTimeout(() => {
        errorEL.innerText = "";
        inputEL.value = "";
     }, 2000);

    
    } else {
        //add + so it converts string to num
        resultEL.innerText = (+inputEL.value/2.2).toFixed(2);
        clearTimeout(resultTime)
        resultTime = setTimeout(()=> {
           resultEL.innerText = "";
           inputEL.value = "";
        }, 1000);

    }
}

updateResults()
inputEL.addEventListener("input", updateResults)