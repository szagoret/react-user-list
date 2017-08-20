export const FETCH_USERS = 'fetch_users';
export const ADD_USER = 'add_user';
export const REMOVE_USER = "remove_user";

const userList = [
    { firstName: "Tudor", lastName: 'Orbey' },
    { firstName: "Vasile", lastName: 'Cortion' },
    { firstName: "Ion", lastName: 'Trindan' },
    { firstName: "Corina", lastName: 'Vladis' }
];

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: userList
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export function removeUser(index) {
    return {
        type: REMOVE_USER,
        payload: index
    }
}