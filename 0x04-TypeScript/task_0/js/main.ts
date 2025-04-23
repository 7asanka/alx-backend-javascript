export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};
const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

const table = document.createElement('table');
const tableHeader = document.createElement('tr');

const headerName = document.createElement('th');
headerName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent  = 'Location';

tableHeader.appendChild(headerName);
tableHeader.appendChild(headerLocation);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
