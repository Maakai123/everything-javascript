const emojiEls = document.querySelectorAll(".emojis")
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")

let selectedEmojis = "";

emojiEls.forEach((emojiEl) => {
    emojiEl.addEventListener("click", (event)=> {
        //console.log(event.target.innerText || event.target.parentNode.innerText);
        removeActive();
        selectedEmojis = 
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", ()=> {
    if(selectedEmojis !== "") {
        containerEl.innerHTML=`<strong>Thank you</strong> 
        <br>
        <br>
        <strong>Feedback: ${selectedEmojis} </strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    }
})


function removeActive(){
    emojiEls.forEach((emojiEl)=> {
        emojiEl.classList.remove("active");
    });
}