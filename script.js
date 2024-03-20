const description = document.querySelector("#description")


function toggleMode() {
    const body = document.body;
    body.classList.contains("ligth");

    if (body.classList.contains("ligth")) {
        body.classList.remove("ligth");
    } else {
        body.classList.add("ligth");
    }

    // Pode ser trocada por: 
    // body.classList.toggle("ligth");
}

