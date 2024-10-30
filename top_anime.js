const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
"No Game No Life", "Prince of Stride: Alternative", "Ao Ashi" ];

const kvadrat = document.querySelector("#box");

kvadrat.addEventListener("mouseover", openlist);

const list = document.querySelector("#list");

function openlist() {
    for (let i = 0; i < topAnime.length; i++) {
        const toplist = topAnime[i];
        console.log(toplist);
        list.innerHTML = toplist;
    }
}
