let users = [];
let id = 0;
const saveUser = () => {
    let firstName, lastName;

    firstName = document.getElementById('nume').value;
    lastName = document.getElementById('prenume').value;

    let user = {
        id: id,
        nume: firstName,
        prenume: lastName
    };

    if (lastName !== "" && firstName !== "") {
        users[id] = user;
        ++id;
    }

    drawTable(users);
}

const drawTable = users => {
    let oldTbody = document.getElementById("myTable");
    oldTbody.innerHTML = "";

    users.forEach(function(item, index) {
        drawRow(oldTbody, index, item)
    });
}

const drawRow = (table, id, user) => {
    let row = table.insertRow(-1);
    row.setAttribute("id", id);

    let button = document.createElement('button');
    let text = document.createTextNode("Sterge");

    button.appendChild(text);
    button.className += "btn btn-danger";

    let idCell = row.insertCell(0);
    let firstNameCell = row.insertCell(1);
    let lastNameCell = row.insertCell(2);
    let deleteButtonCell = row.insertCell(3);
    
    idCell.innerHTML = user.id;
    firstNameCell.innerHTML = user.nume;
    lastNameCell.innerHTML = user.prenume;
    button.setAttribute('onclick', 'deleteButton(' + id + ')');
    deleteButtonCell.appendChild(button);
}

const deleteButton = id => {
    users.splice(id, 1);
    drawTable(users);
}