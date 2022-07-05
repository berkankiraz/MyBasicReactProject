
import React, { useState } from "react";
import "./components/home.css";
import data from './components/data.json'
import {nanoid} from "nanoid"
import SendedMessage from "./components/SendedMessage";

function Home() {
  const [message, setMessage] = useState({
    id: "",

    title: "",

    mail: "",

    content: "",
  });

  const [json,setJson] = useState(data);



  const  handleChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value;
    const temparray = {...message}
    temparray[fieldName]=fieldValue
    setMessage(temparray);

  }

  const SendIt = (event)=>{
    event.preventDefault()
    console.log("send it")
    const tempjson={
      id: nanoid(),

      title: message.title,
  
      mail: message.mail,
  
      content: message.content,
    }
    setJson(json.concat(tempjson))
    
    console.log(JSON.stringify(json))
    
    setMessage({
      id: "",

      title: "",
  
      mail: "",
  
      content: "",

    })



  }
  return (
    <div>
      <div className="dailynewsfinished">
        <h1>Contact us : </h1>
        <br />
      </div>
      <form onSubmit={(event)=>SendIt(event)}>

     
      <div>
        <div className="myinputdiv">
          <input
            type="text"
            name="title"
            required="required"
            placeholder="Enter the Title of Message"
            className="homeinput"
            value={message.title}
            onChange={handleChange}
          ></input>
        </div>

        <div className="myinputdiv">
          <input
            type="text"
            name="mail"
            required="required"
            placeholder="Enter the your Email"
            className="homeinput"
            value={message.mail}
            onChange={handleChange}
          ></input>
        </div>
        <div className="myinputdiv">
          <textarea
            type="text"
            name="content"
            required="required"
            placeholder="Enter the Content of Message"
            className="homeinput"
            rows={15}
            cols={58}
            value={message.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="myinputdiv">
          <button id="homesendbutton" type="submit">Send It !</button>
        </div>
        {/* <div>
          <SendedMessage
          jsoninput={json}/>
        </div> */}
      </div>
      </form>
    </div>
  );
}

export default Home;
