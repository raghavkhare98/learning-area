const sList = document.querySelector(".shopping-list");
const usrInput = document.querySelector("#item");
const addButton = document.querySelector("#add-button");

const listItem = document.createElement("li");
const spanItem = document.createElement("span");
const delButton = document.createElement("button");

listItem.appendChild(spanItem);
listItem.appendChild(delButton);


delButton.textContent = "Delete";

function onItemAdd(){
    addButton.addEventListener("click", () => {
        spanItem.textContent = usrInput.value;
        sList.appendChild(listItem);
        usrInput.value = "";
    })
}

function onItemDel(){
    delButton.addEventListener("click", () => {
        let itemDelete = delButton.parentElement;
        itemDelete.remove();
    })
}


onItemAdd();
onItemDel();