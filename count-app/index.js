 const updateEL = document.querySelector(".update1")
 const increaseBtnEL = document.querySelector(".increase-btn")
 const cancelBtnEL = document.querySelector(".cancel-btn")
 const  decreaseBtnEL = document.querySelector(".decrease-btn")
 const firstResultEL = document.querySelector(".result1")
 const secondResultEL = document.querySelector(".result2")
 const thirdResultEL = document.querySelector(".result3")
 const animeImgEL = document.querySelector(".anime-img")
 
 


 const OutComeEL = document.querySelector(".out-come")
 const pictureEL = document.querySelector(".picture")
 

 let count = 0;
 increaseBtnEL.addEventListener('click',  function() {
    count ++;
    updateEL.textContent = count;
    firstResultEL.style.display = "block";
    firstResultEL.textContent = "increased"
    OutComeEL.style.display = "block"
    OutComeEL.textContent = `The counter increased by ${count ++} and counting........`
    
   
   

 })



 cancelBtnEL.addEventListener('click', async function(){
    count = 0
    updateEL.textContent = count;
    secondResultEL.style.display = "block";
    secondResultEL.textContent = "canceled"
   

    OutComeEL.style.display = "block"
    OutComeEL.textContent = `You cancelled the counter, try again`
   
 
 })

 decreaseBtnEL.addEventListener('click', async function(){
    count--;
    updateEL.textContent = count;
    thirdResultEL.style.display = "block";
    thirdResultEL.textContent = "Decreased"
    OutComeEL.style.display = "block"
    OutComeEL.textContent = `The counter decreased by ${count --} and counting........`
    
   
 }) 
