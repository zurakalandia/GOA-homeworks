let username = null

export function createUser(name) {
    username = name;
}

export function deleteUser(id) {
    username = undefined;
}
