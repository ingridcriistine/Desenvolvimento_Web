let audio = document.getElementById("audio-capitulo");
let capitulo = document.getElementById("capitulo");
let play = false;
let atual = 1;

let caminho = "./books/dom-casmurro/" + atual + ".mp3";
audio.setAttribute("src", caminho);

capitulo.innerHTML += atual;

function proximo() 
{
    if(atual < 10) {
        atual = atual+1;
    }
    else {
        atual = 10;
    }
    
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho);
    capitulo.innerHTML = "Capítulo " + atual;
}

function anterior()
{
    if(atual > 1) {
        atual = atual-1;
    }
    else {
        atual = 1;
    }
    
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho);
    capitulo.innerHTML = "Capítulo " + atual;
}

function pause() 
{
    if(play == false) {
        audio.play();
        play = true;
    }
    else {
        audio.pause();
        play = false;
    }
}

