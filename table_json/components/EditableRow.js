import React from "react";

const EditableRow = ({editFormData , handeeditformchange ,handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="enter the name"
          onChange={handeeditformchange}
          value={editFormData.fullName}
          
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="enter the address"
          onChange={handeeditformchange}
          value={editFormData.address}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="enter the phoneNumber"
          onChange={handeeditformchange}
          value={editFormData.phoneNumber}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="email"
          required="required"
          placeholder="enter the email"
          onChange={handeeditformchange}
          value={editFormData.email}
        ></input>
      </td>
      <td>
        <button type="submit " >Save</button>
        <button type="button" onClick={handleCancelClick} >Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
