import "./render-add-button.css";

export const renderAddButton = (element) => {

    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.classList.add("add-button");

    element.append(addButton);

    addButton.addEventListener("click", () => {
        const modal = element.querySelector(".modal-container");
        modal.classList.remove("hide-modal");
    });
}