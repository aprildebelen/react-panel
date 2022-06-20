// MedicalTreatmentPanel.js

import React from 'react';

// React Hooks Expressions creates setter methods for the attributes:
// treatID, treatCourseID, type, catergory, name, startDate.

function MedicalTreatmentPanel() {
  const [treatId, setTreatId] = React.useState('');

  const [treatCourseId, setTreatCourseId] = React.useState('');

  const [type, setType] = React.useState('');

  const [category, setCategory] = React.useState('');

  const [name, setName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');

  function showClickHandler() {
    window.alert(
      '[' +
        'id = ' +
        treatId +
        ', name = ' +
        treatCourseId +
        ', type = ' +
        type +
        ', category = ' +
        category +
        ', name = ' +
        name +
        ' , startDate = ' +
        startDate +
        ']'
    );
  }

  function clearClickHandler() {
    setTreatId('');
    setTreatCourseId('');
    setType('');
    setCategory('');
    setName('');
    setStartDate('');
  }

  // Using the onChange event handler, and the value data, binds the data entered to state attributes.

  // Using the button onClick handler, calls the function MedicalTreatmentPanel and displays the list of treatments entered when 'show' element is clicked.

  return (
    <div>
      <input
        placeholder="Treatment ID"
        value={treatId}
        onChange={(e) => setTreatId(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Treatment Course ID"
        value={treatCourseId}
        onChange={(e) => setTreatCourseId(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      ></input>

      <br />

      <br />

      <button style={{ color: 'blue' }} onClick={showClickHandler}>
        show
      </button>

      <button style={{ color: 'red' }} onClick={clearClickHandler}>
        Clear
      </button>
    </div>
  );
}

export default MedicalTreatmentPanel;
