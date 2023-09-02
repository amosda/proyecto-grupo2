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
let inconoPalette = document.querySelector("#palette i")


let userData = []; 
// -------------------------


colorElegido = "";

rojo.onclick = (e) => {
    colorElegido = "red"
    palette.classList.add("hiddenPalette")
    inconoPalette.style.color = colorElegido;

}
azul.onclick = (e) => {
    colorElegido = "blue"
    palette.classList.add("hiddenPalette")
    inconoPalette.style.color = colorElegido;

}
verde.onclick = (e) => {
    colorElegido = "green"
    palette.classList.add("hiddenPalette")
    inconoPalette.style.color = colorElegido;

}
amarillo.onclick = (e) => {
    colorElegido = "yellow"
    palette.classList.add("hiddenPalette")
    inconoPalette.style.color = colorElegido;

}



formulario.addEventListener("submit", (e) => {
    e.preventDefault();  

    // locales
    let inputTitle = document.querySelector("#title").value;
    let inputText = document.querySelector("#text").value;

    if(inputTitle === "" && inputText === ""){
        return false;
    }else if( inputTitle !==""  && inputText !== ""){
        divEmpty.classList.add("hidden");

        let obj = {
            inputTitle,
            inputText
        }
    
        userData.push(obj)
    
        //creamos etiquetas HTML para nuestro componente card 
        
        let card = document.createElement("DIV");
        let title = document.createElement("H2");
        let text = document.createElement("P");
        card.style.backgroundColor = colorElegido
    
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
        
    }
    

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
