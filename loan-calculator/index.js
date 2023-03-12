//The onchange event occurs when the value of an HTML element is changed.
//The error most commonly occurs if you use the getElementById() method and pass it an id that is not present in the DOM.


function calculateLoan() {
 loanAmountValue = document.getElementById("loan-amount").value 
 interestRateValue = document.getElementById("interest-rate").value 
 MonthsToPayValue = document.getElementById("months-to-pay").value

 interest = (loanAmountValue * (interestRateValue * 0.01)/ MonthsToPayValue)

 monthlyPayment = (loanAmountValue/MonthsToPayValue + interest).toFixed(2)

 document.getElementById("payment").innerText = `Monthly Payment:
 ${monthlyPayment}`
}