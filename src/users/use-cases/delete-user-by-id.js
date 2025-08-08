import { localhostUserToModel } from "../mappers/localhostUser.mapper";


/**
 * 
 * @param {Number} id 
 * @returns Promise<User>
 */
export const deleteUser = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    console.log(url);

    const res = await fetch(url, {
        method: 'DELETE',
    })

    const deleteResult = await res.json(); 
    console.log(deleteResult);
    return true;
}