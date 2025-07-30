import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {

    const currentPageLabel = document.createElement("span");
    currentPageLabel.id = "current-page";
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = "Next >";
    nextBtn.addEventListener("click", async () => {
        await usersStore.loadNextPage();
        renderTable(element);
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
    });

    const backBtn = document.createElement("button");
    backBtn.classList.add("previous");
    backBtn.innerHTML = "< Prev";
    backBtn.addEventListener("click", async () => {
        await usersStore.loadPreviousPage();
        renderTable(element);
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
    });
    
    element.append(backBtn, currentPageLabel, nextBtn);
}