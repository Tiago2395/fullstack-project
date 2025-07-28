import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUserToModel 
 * @returns User
 */
export const localhostUserToModel = (localhostUserToModel) => {

    const {id, avatar, balance, isActive, first_name, last_name, gender} = localhostUserToModel

    return new User({
        id, 
        avatar, 
        balance, 
        isActive, 
        firstName: first_name, 
        lastName: last_name, 
        gender
    });
}