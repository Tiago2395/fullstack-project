import usersStore from "../../store/users-store";
import "./render-buttons.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = "Next >";

    const backBtn = document.createElement("button");
    backBtn.classList.add("previous");
    backBtn.innerHTML = "< Prev";

    const currentPageLabel = document.createElement("span");
    currentPageLabel.id = "current-page";
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
    
    element.append(backBtn, currentPageLabel, nextBtn);
}