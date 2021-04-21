const divContainer = document.querySelector(".container");
const btnAgregar = document.querySelector(".boton-agregar");
const inputAgregar = document.querySelector(".input");


class Item {
    constructor(tarea) {
        this.tarea = tarea;
    }
    crearDiv() {
        const nuevoItem = document.createElement("input");
        const nuevoDiv = document.createElement("div");
        const editar = document.createElement("button");
        const eliminar = document.createElement("button");

        nuevoItem.value = this.tarea;
        nuevoItem.disabled = true;
        nuevoItem.classList.add("item_input");
        nuevoItem.type = "text";
        //***//

        nuevoDiv.classList.add("item");
        //***//

        editar.classList.add("boton-editar");
        editar.innerHTML = '<i class="fas fa-lock"></i> ';
        //***//

        eliminar.classList.add("boton-remover");
        eliminar.innerHTML = '<i class="fas fa-trash"></i>';
        //***//
        divContainer.appendChild(nuevoDiv);
        nuevoDiv.appendChild(nuevoItem);
        nuevoDiv.appendChild(editar);
        nuevoDiv.appendChild(eliminar);

        //***//
        editar.addEventListener("click", function () {
            if (nuevoItem.disabled == true) {
                this.innerHTML = '<i class="fas fa-lock-open"></i>';
                nuevoItem.disabled = false;
            } else {
                this.innerHTML = '<i class="fas fa-lock"></i>';
                const value = nuevoItem.value;
                this.tarea = value;
                nuevoItem.disabled = true;
            }
        })
        //***//
        eliminar.addEventListener("click", function () {
            nuevoItem.remove()
            editar.remove()
            eliminar.remove()
        })

        
    }
}

btnAgregar.addEventListener("click", function () {
   
    let value = inputAgregar.value;
    if(value.length>0){
        let nuevaTarea = new Item(value);
        nuevaTarea.crearDiv();
        inputAgregar.value="";
    } else {
        alert("No hay tareas agregadas")
    }
})