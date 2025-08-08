import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUserToModel 
 * @returns User
 */
export const userToLocalhostModel = (user) => {

    const {id, avatar, balance, isActive, firstName, lastName, gender} = user;

    return {
        id, 
        avatar, 
        balance, 
        isActive, 
        first_name: firstName, 
        last_name: lastName, 
        gender
    };
}