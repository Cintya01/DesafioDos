let imgElemento = document.querySelector("#imagen");

function borderToggle() {
    if(imgElemento.classList.contains("borderRed")) {
        imgElemento.classList.remove("borderRed");

    } else {
        imgElemento.classList.add("borderRed");
    }
}