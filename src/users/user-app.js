import usersStore from "./store/users-store";


export const UsersApp = async(element) => {
    element.innerHTML = "LOADING...";
    await usersStore.loadNextPage(); 
}