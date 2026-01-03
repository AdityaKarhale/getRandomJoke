document.getElementById('newJokeButton').addEventListener('click', getNewJoke);

async function getNewJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    
    const data = await response.json();
    console.log(data);
    document.getElementById('setup').textContent = data.setup;
    document.getElementById('punchline').textContent = data.punchline;
}

getNewJoke();
