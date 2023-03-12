const btnEL = document.getElementById("btn")
const jokeEL = document.getElementById("joke")
const apiKey = "ji577JUiLdmnbuL/DtpnAw==yot4ifCmPjXbQ3vi";

//APi ninjas
const options = {
   method: "GET",
   headers: {
    "X-Api-Key": apiKey
   },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit= 1"
async function getJoke() {

    try {
        joke.innerText = "updating...."
        btnEL.disabled = true;
        btnEL.innerText = "Loading...."
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke "
        
        jokeEL.innerText = data[0].joke;  
    } catch (error) {
       jokeEL.innerText = " An error happned, try again later"
       console.log(error); 
       btnEL.disabled = false;
        btnEL.innerText = "Tell me a joke "
    }
    
    
}

btnEL.addEventListener("click", getJoke)