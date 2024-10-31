const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
"No Game No Life", "Prince of Stride: Alternative", "Ao Ashi" ];

const kvadrat = document.querySelector("#box");

kvadrat.addEventListener("mouseover", openlist);

const list = document.querySelector("#list");

function openlist() {
    for(let i = 0; i < topAnime.length; i++) {
        const toplist = topAnime[i];
        document.createTextNode(toplist)
        console.log(toplist);
    }
}



// const topAnime = ["No Game No Life: Zero", "Ping Pong the Animation",
//     "No Game No Life", "Prince of Stride: Alternative", "Ao Ashi" ];
     
//     const kvadrat = document.querySelector("#box");
    
//     kvadrat.addEventListener("mouseover", openlist);
//     kvadrat.addEventListener("mouseout", deletelist);
    
    
    
//     function openlist() {
//         for(let i = 0; i < topAnime.length; i++) {
//           const createlist = document.createElement("ul");
//           createlist.className = "list";
//           document.body.prepend(createlist);
    
//           const li = document.createElement("p");
//           li.className = "anime";
//           li.innerHTML = topAnime[i];
//           createlist.append(li);
    
//         } 
//     }
//     function deletelist() {
//       const spisok = document.querySelectorAll(".anime")
//       spisok.remove() 
//     }