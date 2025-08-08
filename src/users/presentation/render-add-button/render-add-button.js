import "./render-add-button.css";
import { showModal } from "../render-modal/render-modal";

export const renderAddButton = (element) => {

    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.classList.add("add-button");

    element.append(addButton);

    addButton.addEventListener("click", () => {
        showModal();
    });
}