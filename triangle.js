function cambio(e) {
    var texto = document.getElementById('texto');

    switch (e) {
        case 0:
            alert('El texto está por defecto.');
            location.reload();
        break;
        case 1:
            texto.style.fontWeight='bold';
            alert('El texto está en negrita.');
        break;
        case 2:
            texto.style.fontStyle='italic';
            alert('El texto está en cursiva.');
        break;
        case 3:
            texto.style.textAlign='center';
            alert('El texto está centrado.');
        break;
        case 4:
            texto.style.textDecoration='underline';
            alert('El texto está subrayado.');
        break;
    }

}



function prompter() {
    var reply = prompt("Hey ¿cuál es tu nombre?", "")
    alert ( "Un placer conocerte " + reply + "!")
}
