import "./render-table.css";
import usersStore from "../../store/users-store";
import { getUserById } from "../../use-cases/get-user-by-id";
import { showModal } from "../render-modal/render-modal";

let table;

const createTable = () => {
    const table = document.createElement("table");
    const tableHeaders = document.createElement("thead");

    tableHeaders.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Balance</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;

    const tableBody = document.createElement("tbody");
    table.append(tableHeaders, tableBody);
    return table;
}

const selectUserListener = async (id) => {
    if (id === null) return;
    
    showModal(id);
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if(!table) {
        table = createTable();
        element.append(table);

        table.addEventListener("click", (event) => {
            const target = event.target;

            if (target.className !== "select-user" && target.className !== "delete-user") return;
            

            if(target.className === "select-user") {
                const id = target.dataset?.id ? target.dataset.id : null;
                console.log("Edit user", target);
                selectUserListener(id);

            } else if (target.className === "delete-user") {
                console.log("deleting user..");
            }
        });
    }

    let tableHtml = "";
    users.forEach(user => {
        tableHtml += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#" class="select-user" data-id=${user.id}>Select</a>
                    |
                    <a href="#" class="delete-user" data-id=${user.id}>Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector("tbody").innerHTML = tableHtml;
}