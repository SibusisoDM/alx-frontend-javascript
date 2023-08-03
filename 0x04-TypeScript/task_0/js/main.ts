interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Oarabilwe",
  lastName: "Mangwane",
  age: 29,
  location: "Pretoria",
};

const student2: Student = {
  firstName: "Kevin",
  lastName: "Ntuli",
  age: 30,
  location: "Pretoria",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid blue";
  locationCell.style.border = "1px solid blue";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
