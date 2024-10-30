const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
"No Game No Life", "Prince of Stride: Alternative", "Ao Ashi" ];
 
const kvadrat = document.querySelector("#box");

kvadrat.addEventListener("mouseover", openlist);
kvadrat.addEventListener("mouseout", deletelist);



function openlist() {
    for(let i = 0; i < topAnime.length; i++) {
      const li = document.createElement("p");
      li.className = "anime";
      li.innerHTML = topAnime[i];
      document.body.append(li);
    } 
}



function deletelist() {
  const spisok = document.querySelector(".anime");
  for(let i = 0; i < spisok.length; i++) {
  
  }
  console.log(spisok[i])
}
