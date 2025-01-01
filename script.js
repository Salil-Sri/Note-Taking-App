const NotesContainer = document.querySelector(".notesContainer");
const button = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showUpdate() {
  NotesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showUpdate() 

function updatestorage() {
  localStorage.setItem("notes", NotesContainer.innerHTML);
}

button.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.className = "delete";
  img.src = "remove-folder-removebg-preview.png";
  NotesContainer.appendChild(inputBox).appendChild(img);
});

NotesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatestorage();
  } else if (e.target.tagName == "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updatestorage();
      };
    });
  }
});

document.addEventListener("keydown", function(e){
    if(e.key  === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();

    }
})