// going to add an api request to a random fact generator
// this one being a possibility https://fact.birb.pw/

const endpoint = 'https://api.chucknorris.io/jokes/random';

function getFact() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => console.log(data.value))
}

function displayFact(fact){
    const factText = document.querySelector('.fact-text');
    factText.textContent = fact;
}

const newFact = document.querySelector('.fact');
newFact.addEventListener('click', getFact);