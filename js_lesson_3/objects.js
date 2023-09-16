// Ітерація за властивостями об'єкта
const employees = {
    name1: "Ігор",
    last_name1: "Петрович",
    age1: 40,
    post1: "Льотчик",
    experience1: 20,
};

const result = document.getElementById("result_1");
const table = document.createElement("table_1");
const header_1 = document.createElement("tr");



for (const key in employees) {
    if (Object.hasOwnProperty.call(employees, key)) {
        const th = document.createElement("th");
        th.textContent = key;
        header_1.appendChild(th);
        // const element = employees[key];
        // const p = document.createElement("p");
        // const text = document.createTextNode(key + ": " + element);
        // p.textContent = element;
        // result.appendChild(p);
    }
}

table.appendChild(header_1);
const d = document.createElement("tr");

for (const key in emp6) {
    if (Object.hasOwnProperty.call(emp6, key)) {
        const td = document.createElement("td");
        td.textContent = emp6[key];
        d.appendChild(td);
        //const element = object[key];

    }
}

table.appendChild(d);
result.appendChild(table);


// Порівняння об'єктів
const obj1 = { name: "Вася" };
const obj2 = { name: "Жора" };

const obj3 = { name: "5" };
const obj4 = { name: "4" };

console.log(obj1 === obj2);
console.log(obj3 == obj4);


// Функції-конструктори
function Emploees(name, last_name, age, post, experience) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.post = post;
    this.experience = experience;
}

const emp1 = new Emploees("Ігор", "Петрович", 40, "Льотчик", 20);
const emp2 = new Emploees("Коваленко", "Світлана", 25, "Лікар-стоматолог", 5);
const emp3 = new Emploees("Жора", "Кириленко", 30, "Інженер-механік", 9);

function addTable(employee, row) {
    const a = document.getElementById(row);
    a.innerHTML = `
    <td>${employee.name}</td>
    <td>${employee.last_name}</td>
    <td>${employee.age}</td>
    <td>${employee.post}</td>
    <td>${employee.experience}</td>
    `;
}

addTable(emp1, "emp1");
addTable(emp2, "emp2");
addTable(emp3, "emp3");


