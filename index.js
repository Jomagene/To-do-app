const INPUT_BOX = document.querySelector("#input-box");
const LIST_CONTAINER = document.querySelector(".list-container");
function addTask() {
  if (INPUT_BOX.value) {
    let li = document.createElement("li");
    li.innerText = INPUT_BOX.value;
    LIST_CONTAINER.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  } else alert("Veillez specifier une tache non vide");
  INPUT_BOX.value = "";
  saveData();
}

LIST_CONTAINER.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", LIST_CONTAINER.innerHTML);
}
function showTask() {
  LIST_CONTAINER.innerHTML = localStorage.getItem("data");
}
showTask();
