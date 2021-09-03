let jokes = document.querySelector("#joke-container");
getRandomJokes();
async function getRandomJokes() {
  try {
    let response = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/ten"
    );
    let data = await response.json();
    jokesContent(data);
  } catch (err) {
    //converting json to object.
    //   console.log(data);
    let oops = document.querySelector(".menu");
    oops.innerHTML = `
    <h3>Sorry Try again Later</h3> 
    <img src="https://miro.medium.com/max/940/0*zzXP9vPajcRELn0x.png" alt="oops">

    `;
    jokes.append(oops);
    console.log("Oops try again later");
  }
}

// create jokes part
function jokesContent(jokeList) {
  jokes.innerHTML = ``;
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
let colorArr = ["#fac", "#cad", "#fcd", "#cf0", "#faa", "#acc"];

let i = 0;
function colorChange() {
  button.style.background = colorArr[i];
  i = (i + 1) % colorArr.length;
}
setInterval(colorChange, 1000);

// getRandomJokes();
