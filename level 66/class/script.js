function flight(id, status) {
    this.id = id;
    this.status = status;
}

let id = prompt('id: ');
let status = prompt('status: ');

let Flight = new flight(id, status);

console.log(`flight ${id} has ${status}`);