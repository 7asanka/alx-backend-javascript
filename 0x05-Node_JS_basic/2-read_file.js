const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n').filter(line => line.trim() !== '');

    const header = data[0].split(',');
    const fieldIndex = header.length - 1;

    const studentsByField = {};

    for (let i = 1; i < data.length; i++) {
      const row = data[i].split(',');
      if (row.length !== header.length) continue;

      const field = row[fieldIndex];
      const firstname = row[0];

      if (!studentsByField[field]) studentsByField[field] = [];
      studentsByField[field].push(firstname);
    }

    const total = Object.values(studentsByField).reduce((sum, list) => sum + list.length, 0);
    console.log(`Number of students: ${total}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
