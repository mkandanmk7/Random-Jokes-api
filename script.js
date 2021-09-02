let jokes = document.querySelector("#joke-container");

async function getRandomJokes() {
  let response = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/ten"
  );
  let data = await response.json(); //converting json to object.
  //   console.log(data);
  jokes.innerHTML = ``;
  jokesContent(data);
}

function jokesContent(jokeList) {
  for (let joke of jokeList) {
    let jokesDiv = document.createElement("div");
    jokesDiv.className = "jokes-list";
    jokesDiv.innerHTML = `
        <h3 class="question">${joke.setup}</h3>
        <p class="ans" >${joke.punchline}</p>

        `;
    jokes.append(jokesDiv);
  }
}
// getRandomJokes();
