import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";


export const UsersApp = async(element) => {
    element.innerHTML = "LOADING...";
    await usersStore.loadNextPage(); 
    element.innerHTML = "";
    renderTable(element);
    renderButtons(element);
    
    console.log(usersStore.getUsers());
}