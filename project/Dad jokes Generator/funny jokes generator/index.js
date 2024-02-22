const btnEl = document.getElementById("btn")
const jokeEl =document.getElementById("joke")

const apiKey ="LzKh+MNoXNGlFpMcRentLA==3Il3lZtI7uF63eEG"; 
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
       
    jokeEl.innerText="Updating...";
    btnEl.disabled=true ;
    btnEl.innerText ="Loading....";
    const response =await fetch(apiURL,options);
    const data =await response.json();

    btnEl.disabled=false ;
    btnEl.innerText ="Some Jokes Please";

    jokeEl.innerText = data[0].joke; 
    } catch (error) {
        jokeEl.innerText = "An error happened try again";
        btnEl.disabled=false ;
        btnEl.innerText ="Some Jokes Please";
        console.log(error); 
    }

}

btnEl.addEventListener("click",getJoke)