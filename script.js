let jokes = document.querySelector("#joke-container");
getRandomJokes();
async function getRandomJokes() {
  let response = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/ten"
  );
  let data = await response.json(); //converting json to object.
  //   console.log(data);
  jokes.innerHTML = ``;
  jokesContent(data);
}

// create jokes part
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
// color changes
// let allJokes = document.querySelector(".joke-container");
let button = document.querySelector(".btn");
let colorArr = ["#fac", "#cad", "#fcd", "#cf0", "#acc"];

let i = 0;
function colorChange() {
  button.style.background = colorArr[i];
  i = (i + 1) % colorArr.length;
}
setInterval(colorChange, 1000);

// getRandomJokes();
