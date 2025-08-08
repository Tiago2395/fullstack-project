import { localhostUserToModel } from "../mappers/localhostUser.mapper";
import { userToLocalhostModel } from "../mappers/userToLocalhost.mapper";
import { User } from "../models/user"
import { hideModal } from "../presentation/render-modal/render-modal";

export const saveUser = async (userLike) => {
    const user = new User(userLike);

    if (!user.firstName || !user.lastName) {
        hideModal();
        alert("Usuario NO creado");
        return;
    }

    const userToSave = userToLocalhostModel(user);
    let userUpdatedOrCreated;
    if (user.id) {
        userUpdatedOrCreated = await updateUser(userToSave);
    } else {
        userUpdatedOrCreated = await createUser(userToSave);

    }
    
    return localhostUserToModel(userUpdatedOrCreated);
}

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const newUser = await res.json(); 
    return newUser;
}


const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    console.log(url);

    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const updatedUser = await res.json(); 
    return updatedUser;
}