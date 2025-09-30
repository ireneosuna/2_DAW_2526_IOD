//DOMContentLoaded 
document.addEventListener("DOMContentLoaded", function () {
    let cantidadTarjetas = parseInt(prompt("¿Qué cantidad de tarjetas desea mostrar?"));
    if (isNaN(cantidadTarjetas) || cantidadTarjetas > 20) {
        alert("El número introducido no es válido, se mostrará una sola tarjeta.");
        cantidadTarjetas = 1;
    }

    for (let i = 0; i < cantidadTarjetas; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = "img/Js.png";
        img.alt = "Imagen JavaScript (Ejemplo)";

        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        let titulo = document.createElement("h3");
        titulo.textContent = "JavaScript";

        let descripcion = document.createElement("p");
        descripcion.textContent = "Lenguaje de programación esencial para la web que añade interactividad a las páginas web.";

        cardContent.appendChild(titulo);
        cardContent.appendChild(descripcion);
        card.appendChild(img);
        card.appendChild(cardContent);

        document.body.appendChild(card);
    }

});

//innerText, innerHTML, textContent

/*

window.addEventListener("load", function(event))´{
let productDiv = createElement("div");
productDiv.id="card-1";
productDiv.innerHTML = `

<h3>Prueba</h3>

`;
document.body.appendChild(productDiv); //opcion 1

document.body.insertAdjacentElemet("afterbegin",productDiv); //opcion 2
}



*/