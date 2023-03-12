const btnEL = document.getElementById("btn")
const quoteEL = document.getElementById("quote")
const authorEl = document.getElementById("author")
//quotable.io to generate Api

const apiURL = "https://api.quotable.io/random";

 async function getQuote() {

    try {


        btnEL.textContent = "Loading.....";
        btnEL.disabled = true;
        quoteEL.textContent = "Updating....."
        const response = await fetch(apiURL);
        const data = await response.json();
        
        
        const quoteContent = data.content;
        const quoteAuthor  = data.author;
        
        quoteEL.textContent = quoteContent
        authorEl.textContent =  "~" + quoteAuthor
        authorEl.style.backgroundColor = "red"
        btnEL.textContent = "Get a quote";
        btnEL.disabled = false;
       
        
        console.log(data)
        
        
    } catch (error) {
        console.log(error)
        quoteEL.textContent = "An error happned try again"
        authorEl.textContent = "An error happned try again"
        btnEL.textContent = "Get a quote";
        btnEL.disabled = false;
    }



}



getQuote()
btnEL.addEventListener('click', getQuote)