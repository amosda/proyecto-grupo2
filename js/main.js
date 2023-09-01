// globales

let formulario = document.getElementById("formulario");
let divEmpty = document.querySelector(".show");
let notesContent = document.querySelector(".notes");
let btnPalette = document.querySelector("#palette");

let palette = document.querySelector("#paletas2");
let rojo = document.querySelector("#rojo");
let azul = document.querySelector("#azul");
let verde = document.querySelector("#verde");
let amarillo = document.querySelector("#amarillo");



let userData = []; 

let colorsData = [];
// -------------------------



rojo.onclick = (e) => {
    colorsData.push("rojo");
}
azul.onclick = (e) => {
    colorsData.push("azul");
}
verde.onclick = (e) => {
    colorsData.push("verde");
}
amarillo.onclick = (e) => {
    colorsData.push("amarillo");
}

console.log(colorsData);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    divEmpty.classList.remove("show");  
    divEmpty.classList.add("hidden");

    // locales
    let inputTitle = document.querySelector("#title").value;
    let inputText = document.querySelector("#text").value;

    let obj = {
        inputTitle,
        inputText
    }

    userData.push(obj)

    //creamos etiquetas HTML para nuestro componente card 
    let card = document.createElement("DIV");
    let title = document.createElement("H2");
    let text = document.createElement("P");

    let buttons = document.createElement("DIV");
    let iconPalette =  document.createElement ("button");
    let iconTrash =  document.createElement ("button");

    buttons.classList.add("more-buttons");
    iconPalette.classList.add("fa-solid", "fa-palette");
    iconTrash.classList.add("fa-solid", "fa-trash-can");
    
    card.classList.add("card");
    
    userData.forEach((element) => {
        title.textContent = element.inputTitle;
        text.textContent = element.inputText;
    
        card.append(title);
        card.append(text);
        // iconPalette.classList.add("fa-solid fa-trash-can");
        // iconTrash.classList.add("fa-solid fa-palette");
         buttons.append(iconPalette);
         buttons.append(iconTrash);
         card.append(buttons);
        
         notesContent.append(card);
    })

});


btnPalette.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation();
    // e.stopImmediatePropagation()
    palette.classList.toggle("hiddenPalette")
    
}, false );



// btnPalette.onclick = () => {
//     console.log("Diste click");
// }
