import { loadUsersByPage } from "../use-cases/load-users"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const data = await loadUsersByPage(state.currentPage + 1);
    if (data) {
        console.log(data.data);
    }
}

const loadPreviousPage = async() => {

}

const onUserChanged = () => {

}

const reloadPage = () => {

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}