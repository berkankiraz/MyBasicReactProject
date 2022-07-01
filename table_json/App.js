// import logo from "./logo.svg";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import { useState, Fragment } from "react";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setaddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  //NULUN ANLAMI ŞUA N KULLANICI BİR DÜZENLEME YAPMIYOR.
  const [EditContactId, setEditContactId] = useState(null);
  const [editFormData, seteditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handeeditformchange = (event) => {
    event.preventDefault();
    const fieldname = event.target.getAttribute("name");

    const fielValue = event.target.value;
    console.log("fieldvalue", fielValue);
    const newformdata = { ...editFormData };
    newformdata[fieldname] = fielValue;

    seteditFormData(newformdata);
    console.log("newformdata", newformdata);
  };

  const handleaddformchange = (event) => {
    event.preventDefault();
    const fieldname = event.target.getAttribute("name");
    const fielValue = event.target.value;
    const newformdata = { ...addFormData };
    ///???????????? güzel bir kullanım
    newformdata[fieldname] = fielValue;
    ///////////
    console.log("name", fieldname);
    console.log("value", fielValue);
    console.log("newformdata", newformdata);
    setaddFormData(newformdata);

    //add form datamızda inputlarda ytazılanlar var.
  };

  const handleAddsubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  const handleEditclick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const editnewform = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    console.log("editnewformdata", editnewform);
    seteditFormData(editnewform);
  };
  const handleEditFormsubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: EditContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];
    //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function
    const index = contacts.findIndex((contact) => contact.id === EditContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDelteclick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="App-container">
      <form onSubmit={handleEditFormsubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {EditContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handeeditformchange={handeeditformchange}
                    handleCancelClick={handleCancelClick}
                  ></EditableRow>
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditclick={handleEditclick}
                    handleDelteclick={handleDelteclick}
                  ></ReadOnlyRow>
                )}
              </Fragment>
            ))}
          </tbody>
          <h2>Add contact :</h2>
        </table>
      </form>

      <form onSubmit={handleAddsubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="enter the name"
          onChange={handleaddformchange}
        ></input>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="enter the adress"
          onChange={handleaddformchange}
        ></input>
        <input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="enter the number"
          onChange={handleaddformchange}
        ></input>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="enter the email"
          onChange={handleaddformchange}
        ></input>

        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default App;
