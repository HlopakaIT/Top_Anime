const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
"No Game No Life", "Prince of Stride: Alternative", "Ao Ashi"];
 
const trigger = document.getElementById("box");

trigger.addEventListener("mouseover", createlist);
trigger.addEventListener("mouseout", deletelist);


function createlist() {

  const content = document.getElementById("content");
  const animeList = document.createElement("div");
  animeList.id ="anime-list";

  for(let i = 0; i < topAnime.length; i++) {
    const li = document.createElement("p");
    li.classList.add("anime");
    li.innerHTML = topAnime[i];
    animeList.append(li);
  }
  content.append(animeList);
}


function deletelist() {
  const myAnimeList = document.getElementById("anime-list");
  myAnimeList.remove()
}