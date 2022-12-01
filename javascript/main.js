function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

// GETS CLASS FOR THE BUTTONS
const listaDeTeclas = document.querySelectorAll('.audio');

// GO FOR EACH BUTTON AND PLAY SOUND
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#id_${instrumento}`; 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

