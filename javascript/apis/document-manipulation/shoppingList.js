const sList = document.querySelector(".shopping-list");
const usrInput = document.querySelector("#item");
const addButton = document.querySelector("#add-button");

const listItem = document.createElement("li");
const spanItem = document.createElement("span");
const delButton = document.createElement("button");



function onItemAdd(){
    addButton.addEventListener("click", () => {
        let addedItem = usrInput.value;
        console.log(addedItem);
        usrInput.value = ""; 
    })
}


onItemAdd();