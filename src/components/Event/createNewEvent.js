import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function createNewEvent() {
  const [data, setData] = useState({
    name: "",
    fee: 0,
    startDate: null,
    endDate: null,
    selectedYears: [] // Initialize selectedYears as an empty array
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date, fieldName) => { // Added fieldName parameter
    setData((prevState) => ({
      ...prevState,
      [fieldName]: date // Use fieldName to update either startDate or endDate
    }));
  };

  const handleYearChange = (e) => {
    const { value } = e.target;
    setData((prevState) => ({
      ...prevState,
      selectedYears: [...prevState.selectedYears, value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const submitButtonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <form
      style={{
        marginTop: "200px",
        border: "1px solid #ccc",
        padding: "20px",
        width: "400px",
        margin: "0 auto",
      }}
      onSubmit={handleSubmit}
    >
      <h2>Event Details</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Fee:</label>
            </td>
            <td>
              <input
                type="text"
                name="fee"
                value={data.fee}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Start Date:</label>
            </td>
            <td>
              <DatePicker
                selected={data.startDate}
                onChange={(date) => handleDateChange(date, "startDate")} // Pass fieldName parameter
                dateFormat="MM/dd/yyyy"
                placeholderText="Start Date"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>End Date:</label>
            </td>
            <td>
              <DatePicker
                selected={data.endDate}
                onChange={(date) => handleDateChange(date, "endDate")} // Pass fieldName parameter
                dateFormat="MM/dd/yyyy"
                placeholderText="End Date"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Select Years:</label>
            </td>
            <td>
              <div>
                <input
                  type="checkbox"
                  name="selectedYears"
                  value="1"
                  checked={data.selectedYears.includes("1")}
                  onChange={handleYearChange}
                />
                <label>1</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="selectedYears"
                  value="2"
                  checked={data.selectedYears.includes("2")}
                  onChange={handleYearChange}
                />
                <label>2</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="selectedYears"
                  value="3"
                  checked={data.selectedYears.includes("3")}
                  onChange={handleYearChange}
                />
                <label>3</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="selectedYears"
                  value="4"
                  checked={data.selectedYears.includes("4")}
                  onChange={handleYearChange}
                />
                <label>4</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default createNewEvent;
