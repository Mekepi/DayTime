function main() {
    tempo = (new Date()).getHours();
    
    if (tempo== 0 || tempo == 1) {
        window.document.querySelector(".horario").innerHTML =  `Agora é ${tempo} hora.`;
    } else {
        window.document.querySelector(".horario").innerHTML =  `Agora são ${tempo} horas.`;
    }
    
    img = window.document.querySelector('img[alt="mood"]');
    bg = window.document.body;
    if (tempo < 4 || tempo > 22) {
        img.src = `img/madrugada.jpg`;
        bg.style.backgroundColor = "#292b14";
    } else if (tempo < 7) {
        img.src = `img/amanhecer.jpg`;
        bg.style.backgroundColor = "#e78442";
    } else if (tempo < 16) {
        img.src = `img/dia.jpg`;
        bg.style.backgroundColor = "#ebcc46";
    } else if (tempo < 19) {
        img.src = `img/anoitecer.jpg`;
        bg.style.backgroundColor = "#442252";
    } else {
        img.src = `img/noite.jpg`;
        bg.style.backgroundColor = "#101f23"
    }
    
    return;
}

main()