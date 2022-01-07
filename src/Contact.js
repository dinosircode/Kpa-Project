import { useState } from "react";
import ReactDOM from "react-dom";
import './contact.css';

import { db } from "./firebase-config";
import {
  collection,
  addDoc
} from "firebase/firestore"



function Contact() {




  const [Email, setEmail] = useState("");
const [Name, setName] = useState("");
const [Message, setMessage] = useState("");

  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "MessagesUses");

    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

     const createUser = async () => {
    await addDoc(usersCollectionRef, { 
        Name: Name , 
        Email: Email , 
        Message: Message ,
        
    });
    alert("Submited");
  }
  
    return (
      
      <form class="form" onSubmit={handleSubmit}>
          <center>
          <div><br></br><br></br></div>
      
          <div class="contimg">
              <h1 class="person"><b>Contact Us</b></h1>
          </div>
       
            
          
           <br></br>  
          <br></br>
          <div class="con">
            <br></br>
  <br>
  </br>      <label><b> Name</b> &ensp;&ensp;&ensp;
        <input 
          type="text" 
          name="username" 
          onChange={(event) => {
          setName(event.target.value);
        }} 
        /></label>
        
          
          
            
        &ensp;&ensp;&ensp;<label><b>Email</b>&ensp;&ensp;&ensp;
          <input 
            type="text" 
            name="email" 
            onChange={(event) => {
          setEmail(event.target.value);
        }} 
          />
          </label>
          <br></br>
          <br></br>


          <br>
  </br>     


          <label><b>Ask Your Doubts</b></label>
    <br></br>
    <label>
<textarea id="cadd" name="cadd" rows="4" cols="50" onChange={(event) => {
          setMessage(event.target.value);
        }} ></textarea>

</label>
    <br></br>
          <br></br>
  <input class="btn1" type="submit" value="Submit"
onClick={createUser}
  /><br></br>
  <br></br>
  </div>
  
      
          </center>
      </form>
    )
  }
  ReactDOM.render(<Contact />, document.getElementById('root'));
  
  export default Contact;
  