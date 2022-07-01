import React from 'react'

const ReadOnlyRow = ({contact,handleEditclick ,handleDelteclick}) => {
  return (
    <tr >
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>
        <button type="button" onClick={(event)=>handleEditclick(event,contact)}>Edit</button>
        <button type="button" onClick={()=>handleDelteclick(contact.id)} >Delete</button>
    </td>
    
  </tr>
  )
}

export default ReadOnlyRow