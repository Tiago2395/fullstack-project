import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
import { getUserById } from "../../use-cases/get-user-by-id";

let modal, form;
let loadedUser = {};

export const showModal = async (id) => {
    loadedUser = {};
    modal?.classList.remove("hide-modal");

    if (!id) return;

    loadedUser = await getUserById(id);
    setFromValues(loadedUser);
}

const setFromValues = (user) => {
    const {firstName, lastName, balance, isActive} = user;

    const firstNameInput = form.querySelector("input[name='firstName']");
    const lastNameInput = form.querySelector("input[name='lastName']");
    const balanceInput = form.querySelector("input[name='balance']");
    const isActiveCehckbox = form.querySelector("input[name='isActive']");

    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    balanceInput.value = balance;
    isActiveCehckbox.checked = isActive;
    
    console.log(form);
}

export const hideModal = () => {
    modal?.classList.add("hide-modal");
    form.reset();
}

export const renderModal = (element, saveUserCallback) => {
    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = modalHtml;
    modal.classList.add("modal-container", "hide-modal");
    form = modal.querySelector("form");

    modal.addEventListener("click", (event) => {
        if(event.target.className === "modal-container") {
            hideModal();
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loadedUser};
        for (const [key, value] of formData) {
            console.log(key, value);
            if (key === "balance"){
                userLike[key] = +value;
                continue;
            }
            if (key == "isActive") {
                userLike[key] = (value === "on") ? true : false;
                continue;
            }
            userLike[key] = value;
        }
        console.log(userLike);
        await saveUserCallback(userLike);
        hideModal();
    });

    element.append(modal);
}