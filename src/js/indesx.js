/*
OBJETIVO 1- Quando o usuário clicar no botão de veja trailer, devemos abrir a modal com o vídeo do trailer
    - passo 1 - pegar o elemento que representa o botão na tela
    - passo 2 - identificar quando o usuário clicar no botão
    - passo 3 - pegar o elemento da modal
    - passo 4 - abrir modal na tela

OBJETIVO 2- Quando o usuário clicar no X devemos fechar a modal
    - passo 1 - pegar o elemento de fechar modal
    - passo 2 - identificar quando o usuário clicar no x
    - passo 3 - fechar a modal

 */

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");

});

