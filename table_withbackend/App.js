import "./App.css";
import axios from "axios";
import { Fragment, useState } from "react";

function App() {
  const [EditedEmployeeId, setEditedEmployeeId] = useState(null);
  const [editedNewForm, setEditedNewForm] = useState({
    EmployeeName: "",
    Department: "",
    DateOfJoining: "",
  });
  // verileri alma ve employe set etme.
  const [employee, setEmployee] = useState([]);
  axios.get("http://localhost:53535/api/employee").then((response) => {
    setEmployee(response.data);
  });

  const [addFormData, setAddFormData] = useState({
    EmployeeName: "",
    Department: "",
    DateOfJoining: "",
  });
  //input alanındaki her değişiklikte çalışır.

  const handleAddChange = (event) => {
    event.preventDefault();
    //hangi input alanıysa o alanın ismi
    const inputFieldAttribute = event.target.getAttribute("name");
    const inputFieldValue = event.target.value;
    // ilk boş arrayı(addformdata) kopyala
    const temporaryInputData = { ...addFormData };
    temporaryInputData[inputFieldAttribute] = inputFieldValue;
    setAddFormData(temporaryInputData);
    console.log("inputarray", temporaryInputData);
  };
  const handleAddsubmit = (event) => {
    event.preventDefault();
    console.log("add basildi.");
    const newEmployee = {
      EmployeeId:addFormData.EmployeeId,
      EmployeeName: addFormData.EmployeeName,
      Department: addFormData.Department,
      DateOfJoining: addFormData.DateOfJoining,
      PhotoFileName: "null"
    };
    axios
      .post("http://localhost:53535/api/employee", newEmployee)
      .then((response) => {
        console.log("post is runned");
        setEmployee(employee.concat(response));
      });
  };

  const handleDeleteClick = (employeeID) => {
    const url = `http://localhost:53535/api/employee/${employeeID} `;
    axios.delete(url).then((response) => {
      console.log("it is deleted ", response);
      setEmployee(employee.concat(response));
    });
  };
  const handleEditClick = (event, employee) => {
    event.preventDefault();

    setEditedEmployeeId(employee.EmployeeId);

    const editedNewForm = {
      EmployeeId: employee.EmployeeId,
      EmployeeName: employee.EmployeeName,
      Department: employee.Department,
      DateOfJoining: employee.DateOfJoining,
      PhotoFileName: "null"
    };
    setEditedNewForm(editedNewForm);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");

    const fieldValue = event.target.value;

    const newformdata = { ...editedNewForm };
    newformdata[fieldName] = fieldValue;

    setEditedNewForm(newformdata);
  };
  const handleCancelClick = () => {
    setEditedEmployeeId(null);
  };
  const handleSaveClick = (event)=>{
    event.preventDefault()
    const editedEmployee = {
      EmployeeId:EditedEmployeeId,
      EmployeeName: editedNewForm.EmployeeName,
      Department: editedNewForm.Department,
      DateOfJoining: editedNewForm.DateOfJoining,
      PhotoFileName: "rgrf"
    };
    console.log(EditedEmployeeId)
    console.log(editedEmployee)
    axios
      .put(`http://localhost:53535/api/employee`, editedEmployee)
      .then((response) => {
        console.log("put is runned",response);
      }).catch(e=> {console.log(e)});
      setEditedEmployeeId(null);

  }
  

  return (
    <div className="App">
      <h1>Department:</h1>
      <form onSubmit={handleSaveClick}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>DateOfJoining</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <Fragment>
                {EditedEmployeeId === employee.EmployeeId ? (
                  <tr >
                    <td>{employee.EmployeeId}</td>
                    <td>
                      <input
                        type="text"
                        name="EmployeeName"
                        required="required"
                        placeholder="enter the name"
                        onChange={handleEditFormChange}
                        value={editedNewForm.EmployeeName}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Department"
                        required="required"
                        placeholder="enter the department"
                        onChange={handleEditFormChange}
                        value={editedNewForm.Department}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="DateOfJoining"
                        required="required"
                        placeholder="enter the date of joining"
                        onChange={handleEditFormChange}
                        value={editedNewForm.DateOfJoining}
                      ></input>
                    </td>
                    <td>
                      <button type="submit " >Save</button>
                      <button type="button " onClick={handleCancelClick}>Cancel</button>
                    </td>
                  </tr>
                ) : (
                  <tr >
                    <td>{employee.EmployeeId}</td>
                    <td>{employee.EmployeeName}</td>
                    <td>{employee.Department} </td>
                    <td>{employee.DateOfJoining}</td>
                    <td>
                      <button
                        type="button"
                        onClick={(event) => handleEditClick(event, employee)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteClick(employee.EmployeeId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add Employee :</h2>

      <form onSubmit={handleAddsubmit}>
        <input
          type="text"
          name="EmployeeName"
          required="required"
          placeholder="enter the name"
          onChange={handleAddChange}
        ></input>
        <input
          type="text"
          name="Department"
          required="required"
          placeholder="enter the department"
          onChange={handleAddChange}
        ></input>
        <input
          type="number"
          name="DateOfJoining"
          required="required"
          placeholder="enter the date of joining"
          onChange={handleAddChange}
        ></input>

        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default App;
