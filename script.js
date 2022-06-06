amarelo()
  
 
function vermelho(){
  document.querySelector('#vermelho').classList.remove("opacidade")
 document.querySelector('#amarelo').classList.add("opacidade")
 document.querySelector('#verde').classList.add("opacidade")
 const bred = document.getElementById("vermelho");
 const red = document.querySelector(".mov");
 bred.addEventListener("click", ()=> {red.style.animation = "";
  setTimeout(() => red.style.animation = "none", 5);
});
}

function amarelo(){
   
 document.querySelector('#vermelho').classList.add("opacidade")
 document.querySelector('#amarelo').classList.remove("opacidade")
 document.querySelector('#verde').classList.add("opacidade")
  
 const botaoamarelo = document.getElementById("amarelo");
 const yellow = document.querySelector(".mov");
 botaoamarelo.addEventListener("click", ()=> {yellow.style.animation = "";
  setTimeout(() => yellow.style.animation = "movcarro 6s liner infinite", 5);
});

}
function verde(){
 document.querySelector('#vermelho').classList.add("opacidade")
 document.querySelector('#amarelo').classList.add("opacidade")
 document.querySelector('#verde').classList.remove("opacidade")
  
 const botaoverde = document.getElementById("verde");
 const grenn = document.querySelector(".mov");
 botaoverde.addEventListener("click", ()=> {
  grenn.style.animation = "";
  setTimeout(() => grenn.style.animation = "movcarro 1s linear infinite", 5);
});

}


