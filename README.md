# Tranzit Simulator

## Acesse a página do jogando clicando [aqui](https://radicaenta.github.io/Tranzit-Simulator/), a minha aplicação se chama "Tranzit Simulator", consiste em um carro que reage as cores semáforo.
### No Javascript eu fiz com que o botão verde do semaforo ativasse a "class" de opacidade 0.4 nos botões vermelho e amarelo, além de ativar a animação em keyframes no carro, na qual ele corre mais rapido que no amarelo. ( Essa foi a função "verde ()")
~~~Javascript
 const botaoverde = document.getElementById("verde");
 const grenn = document.querySelector(".mov");
 botaoverde.addEventListener("click", ()=> {
  grenn.style.animation = "";
  setTimeout(() => grenn.style.animation = "movcarro 1s linear infinite", 5);
~~~
### Eu também fiz com que o botão amarelo do semaforo ativasse a "class" de opacidade 0.4 nos botões vermelho e verde, além de ativar a "class" "mov", que ativa a animação em keyframes no carro, na qual ele corre mais devagar que o amarelo.( Essa foi a função "amarelo ()")
~~~Javascript
 const botaoamarelo = document.getElementById("amarelo");
 const yellow = document.querySelector(".mov");
 botaoamarelo.addEventListener("click", ()=> {yellow.style.animation = "";
  setTimeout(() => yellow.style.animation = "movcarro 6s liner infinite", 5);
~~~
### No botão vermelho do semaforo, eu também fiz com que ativasse a "class" de opacidade 0.4 nos botões amarelo e verde, além de desativar qualquer outra animação em keyframe que esteja ativada. ( Essa foi a função "vermelho ()")
~~~Javascript
 const bred = document.getElementById("vermelho");
 const red = document.querySelector(".mov");
 bred.addEventListener("click", ()=> {red.style.animation = "";
  setTimeout(() => red.style.animation = "none", 5);
~~~
### E no inicio do código eu ativei a função "amarelo", para que toda vez que a aplicação for iniciada o carro ja começar no amarelo com aquela velocidade.
 ~~~Javascript
 amarelo()
 ~~~
  ##### - Paulo Rhyan Kuster
Trabalho da matéria Construçao de Software para Web de Ciência da Computação na Universidade Vila Velha
