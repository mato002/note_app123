const btnEl = document.getElementById("btn");
const appEl =document.getElementById("app");

getNotes().forEach((note) => {
   const noteEl = createNoteEl(note.id,note.content);
   appEl.insertBefore(noteEl,btnEl);
});


function createNoteEl(id,content){
    const element =document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value=content ;

    element.addEventListener("dblclick",()=>{
const warning = confirm("do you want  to  delete this note?");
if(warning){
    deleteNote(id, element);
}
    });

    element.addEventListener("input"), ()=>{
        updateNote(id, element.value)
    }
    function deleteNote(){

    }
}
function addNote()
{
    const notes =[];
    const noteObj ={
        id: Math.floor(Math.random()*100000),
        content:" ",

    }
    const noteEl =createNoteEl(noteObj.id,noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes)

}
function saveNote(note){
    localStorage.setItem("note-app",JSON.stringify(notes))
}
function getNotes(){
    JSON.parse(localStorage.getItem(note-app) || "[");
    
}
btnEl.addEventListener("click",addNote);
