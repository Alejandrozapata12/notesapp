// Function to add notes
function addNotes(){

    var input = document.getElementById("inputNote");
    let note = input.value;

    if(note.trim() !== ''){

        // Create a new item in the list
        let noteNew = document.createElement("li");
        noteNew.textContent = note;
        noteNew.className = "items";


        // Add delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete note";
        deleteBtn.className = "deleteButton";
        deleteBtn.onclick = function(){
            listaNotas.removeChild(noteNew);
    
        }

        // We add the button to delete note
        noteNew.appendChild(deleteBtn);
        // We add the new note to the list
        listaNotas.appendChild(noteNew);

        // Clear the input field
        input.value = '';
        
    }else{
        alert("Enter a valid note.");
    }
}

var addButton = document.getElementById("buttonAgregar");
var list_1 = document.getElementById("listaNotas");

addButton.addEventListener("click",addNotes);