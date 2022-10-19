import json from './data.json' assert { type: 'json' };

const { data } = json;
console.log(data)

function generateTable() {
  const tbody = document.querySelector('tbody');
  const company = document.querySelector('.company');

  // insert cells
  for (let i = 0; i < data.length; i++) {
    // insert table rows
    const row = document.createElement('tr');

    const cell = document.createElement('tr');
    const cellText = document.createTextNode(data[i].company_name);
    cell.appendChild(cellText);
    cell.style.textTransform = 'capitalize';
    company.appendChild(cell);

    // add the row to the end of the table body
    tbody.appendChild(row);
  }
}

generateTable();





