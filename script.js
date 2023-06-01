const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();
function updateStore() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let binImg = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    binImg.src = "./bin.png"
    binImg.className = "del-icon"

    notesContainer.appendChild(inputBox).appendChild(binImg)
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStore();
    } else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note =>  {
            note.onkeyup = function() {
                updateStore();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key == "Enter") {
        document.execCommand('insertLineBreak')
        event.preventDefault();
    }
})
