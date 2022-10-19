import json from './data.json' assert { type: 'json' };

const { data } = json;

function generateTable() {
  const tbody = document.querySelector('tbody');
  const table = document.querySelector('table');
  
  // insert cells
  for (let i = 0; i < data.length; i++) {
    // insert table rows
    const row = document.createElement('tr');
    const cellNum = Object.values(data[i]).length;

    for (let j = 0; j < cellNum; j++) {
      const cell = document.createElement('td');
      let cellText;

      if (Object.keys(data[i])[j] === 'contact') {
        let mobileNum = Object.values(data[i])[j].mobile;
        mobileNum = mobileNum.substring(0, 4) + ' ' + mobileNum.substring(4, mobileNum.length);
        cellText = document.createTextNode(mobileNum);
      } else if (Object.keys(data[i])[j] === 'spend_amount') {
        let amount = `HKD ${Object.values(data[i])[j]}`
        cellText = document.createTextNode(amount);
      } else {
        cellText = document.createTextNode(Object.values(data[i])[j]);
      }
      cell.appendChild(cellText);
      cell.style.textTransform = 'capitalize';
      row.appendChild(cell);
    }
    
    // add the row to the end of the table body
    tbody.appendChild(row);
  }

  // set table border
  table.setAttribute('border', '1');
}

generateTable();





