const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
"No Game No Life", "Prince of Stride: Alternative", "Ao Ashi" ];
 
const kvadrat = document.querySelector("#box");

kvadrat.addEventListener("mouseover", openlist);
kvadrat.addEventListener("mouseout", deletelist);

const createlist = document.createElement("ul");
createlist.className = "list";

function openlist() {
    for(let i = 0; i < topAnime.length; i++) {
        const li = document.createElement("li");
        li.className = "anime";
        li.innerHTML = topAnime[i];
        createlist.append(li);
      }; 
}

document.body.prepend(createlist);

function deletelist() {
const ping = document.querySelector(".anime").remove();
}
