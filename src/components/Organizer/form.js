import React, { useState } from 'react';

function Form() {
  const [data, setData] = useState({
    committee_name: '',
    poc_name: '',
    poc_email: '',
    poc_contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(Object.assign({}, data, { [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(data); 
  };
  const submitButtonStyle = {
    backgroundColor: 'green', 
    color: 'white', 
    padding: '10px 20px',
    borderRadius: '5px', 
    cursor: 'pointer' 
  };
 

  return (
    
    <form style={{ marginTop:"200px",border: '1px solid #ccc', padding: '20px', width: '400px', margin: '0 auto' }}>
      <table>
        <h2>Organizer Details</h2>
        <tbody>
          <tr>
            <td ><label>Committee Name:</label></td>
            <td><input type="text" name="committee_name" value={data.committee_name} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td ><label>POC Name:</label></td>
            <td><input type="text" name="poc_name" value={data.poc_name} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td ><label>POC Email:</label></td>
            <td><input type="email" name="poc_email" value={data.poc_email} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td ><label>POC Contact:</label></td>
            <td><input type="text" name="poc_contact" value={data.poc_contact} onChange={handleChange} required /></td>
          </tr>
        </tbody>
      </table>
      <div style={{marginTop: '20px',textAlign: 'right'}}>
        <button type="submit" onClick={handleSubmit} style={submitButtonStyle}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
