let input = document.getElementById("userInput")
let enterButton = document.getElementById("enter")
let ul = document.querySelector("ul")
let item = document.getElementsByTagName("li")


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // Strikethru start
    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut)
    // strikethru end


    // Add delete btn start
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem)
    // Add delete btn end


    // Add class delete start
    function deleteListItem() {
        li.classList.add("delete")
    }
    // Add class delete end

}

function addItem() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addItemAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

input.addEventListener("keypress", addItemAfterKeypress);

