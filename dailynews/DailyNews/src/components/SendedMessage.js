import React from "react";

function SendedMessage({ jsoninput }) {
  return (
    <div>
      <ul>
        {jsoninput.map((json,key) => 
          <li key = {key}> {json.title}  {json.mail}  {json.content}</li>
        )}
      </ul>
    </div>
  );
}

export default SendedMessage;
