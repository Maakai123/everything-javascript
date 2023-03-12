const btnEL = document.getElementById("btn")
//target app div
const appEL = document.getElementById("app")


getNotes().forEach((note)=> {
    const noteEL = createNoteEL(note.id,note.content);
    appEL.insertBefore(noteEL, btnEL)
})

function createNoteEL(id, content) {
    const element = document.createElement("textarea")
    //create class="note", placeholder and value
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    //Delete when we double click
    element.addEventListener("dblclick", ()=> {
        const warning = confirm("Do you want to delete this note?")

        //if warning is true
        if(warning) {
            deleteNote(id, element)

        }
        
    })

    //add another event that listen to input
    element.addEventListener("input", ()=> {
        updateNote(id, element.value)

    });
    return element;
    //this is the output

}


function deleteNote(id, element) {
    const notes = getNotes().filter((note)=> note.id !=id)

    saveNote(notes)
    appEL.removeChild(element)

}


function updateNote(id, content) {
const notes = getNotes()
const target = notes.filter((note)=>note.id == id)[0];
target.content = content;
saveNote(notes);

}
function  addNote() {

    const notes = getNotes();

 const noteObj = {
    id: Math.floor(Math.random()* 100000),
    content: "",
 } 
 const noteEL = createNoteEL(noteObj.id, noteObj.content)
 appEL.insertBefore(noteEL,btnEL)
 notes.push(noteObj);

 saveNote(notes);
}


function saveNote(notes) {
    //save this into local storage
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes(){

   return  JSON.parse(localStorage.getItem("note-app") || "[]")
}

btnEL.addEventListener('click', addNote)