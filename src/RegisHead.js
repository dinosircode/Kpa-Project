import { useState } from "react";
import ReactDOM from "react-dom";
import './reg.css';
import { db } from "./firebase-config";
import {
  collection,
  addDoc
} from "firebase/firestore"

function MyForm() {







const [newName, setNewName] = useState("");
const [Coursesem, setCoursesem] = useState("");
const [Institution, setInstitution] = useState("");
const [University, setUniversity] = useState("");
const [ContactAdress, setContactAdress] = useState("");
const [PermenentAdress, setPermenentAdress] = useState("");
const [MobilePhone, setMobilePhone] = useState("");
const [EmailID, setEmailID] = useState("");
const [DOBirth, setDOBirth] = useState("");
const [InternshipBehin, setInternshipBehin] = useState("");
const [InternshipEnd, setInternshipEnd] = useState("");
const [Gender, setGender] = useState("");

  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "interns");

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
        Name: newName , 
        Coursesem: Coursesem , 
        Institution: Institution ,
        University : University ,
        ContactAdress : ContactAdress ,
        PermenentAdress : PermenentAdress ,
        MobilePhone : MobilePhone ,
        EmailID : EmailID ,
        DOBirth : DOBirth ,
        InternshipBehin : InternshipBehin ,
        InternshipEnd : InternshipEnd ,
        Gender : Gender
    });
    alert("Submited");
  };

  return (
      
    
    <form class="form" onSubmit={handleSubmit}>
        <center>
        <div class="studimg">
            <h1 class="personal"><b>PERSONAL INFORMATION</b></h1>
        </div>
     
          
        
         <br></br>  
        <br></br>
        <div class="contentimg">
          <br></br>
<br>
</br>      <label><b>Enter Your Name</b> &ensp;&ensp;&ensp;
      <input 
        type="text" 
        name="username" 
        onChange={(event) => {
          setNewName(event.target.value);
        }}      />
      <br></br>
      <br></br>
      </label>
      <label><b>Course And Semester&ensp;&ensp;&ensp;</b>
        <input 
          type="text" 
          name="course" 
          onChange={(event) => {
          setCoursesem(event.target.value);
        }} 
        />
        </label>
        <br></br>
        <br></br>
        <label><b>Name Of The Institute&ensp;&ensp;&ensp;</b>
        <input 
          type="text" 
          name="institute" 
          onChange={(event) => {
          setInstitution(event.target.value);
        }} 
        />
        </label>
        <br></br>
        <br></br>
        <label><b>Name Of The University</b>&ensp;&ensp;&ensp;
        <input 
          type="text" 
          name="university" 
          onChange={(event) => {
          setUniversity(event.target.value);
        }} 
        />
        </label>
        <br></br>
        <br></br>
        <label><b>Contact Address</b></label>
    <br></br>
    <label>
<textarea id="cadd" name="cadd" rows="4" cols="50"

 onChange={(event) => {
          setContactAdress(event.target.value);
        }} 
></textarea>

</label>
        
      
            <br></br>
        <br></br>
            <label><b>Permanent Address</b></label>
            <br></br>
            <label>
                
            <textarea id="padd" name="cadd" rows="4" cols="50" onChange={(event) => {
          setPermenentAdress(event.target.value);
        }} ></textarea>
        
            </label>
            
        <br></br>
        <label><b>Mobile</b>&ensp;&ensp;&ensp;
        <input 
          type="text" 
          name="mobile" 
          onChange={(event) => {
          setMobilePhone(event.target.value);
        }}
        />
        </label>
        <br></br>
        <br></br>
        <label><b>Email</b>&ensp;&ensp;&ensp;
        <input 
          type="text" 
          name="email" 
         onChange={(event) => {
          setEmailID(event.target.value);
        }}
        />
        </label>
        <br></br>
        <br></br>
        <label><b>Date Of Birth</b>&ensp;&ensp;&ensp;
        <input 
          type="date" 
          name="dob" 
          onChange={(event) => {
          setDOBirth(event.target.value);
        }}
        />
        </label>


        <br></br>
        <br></br>
        <label><b>Internship Begin Date</b>
        <input 
          type="date" 
          name="dob" 
          onChange={(event) => {
          setInternshipBehin(event.target.value);
        }}
        />
        </label>

        <br></br>
        <br></br>
        <label><b>Internship End Date</b>&ensp;
        <input 
          type="date" 
          name="dob" 
          onChange={(event) => {
          setInternshipEnd(event.target.value);
        }}
        />
        </label>
        <br></br>
        <br></br>
        <div><label><b>Gender&ensp;&ensp;&ensp;
        <input type="radio" value="Male" name="gender" onChange={(event) => {
          setGender(event.target.value);}}/> Male
        <input type="radio" value="Female" name="gender" onChange={(event) => {
          setGender(event.target.value);}}/> Female
        <input type="radio" value="Other" name="gender" onChange={(event) => {
          setGender(event.target.value);}}/> Other</b>

        </label>
      </div>
    <br></br>
    <br></br>


     
     <b><u>Upload Your Files Here..</u></b>
      <br></br>
      <br></br>
        
        <div className="mb-1">
          
           <b> Application</b><span className="font-css top"><b> Form</b></span>
       <div className="">
    <input type="file" id="file-input" name="ImageStyle"/>
    </div>
</div>
<br></br>

   <div className="mb-2"><b>
    Concern Letter </b><span className="font-css top"><b>From Institution</b></span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle" />
     </div>
</div>

<br></br>
    <div className="mb-3"><b>
    Police Clearence</b> <span className="font-css top"><b>From Residence</b></span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>

<br></br>
        
        <div className="mb-4"><b>
     PoliceClearence</b> <span className="font-css top"><b>From Place Of Institute</b></span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
<br></br>
        
        <div className="mb-5"><b>
     Resu</b><span className="font-css top"><b>me</b></span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
<br></br>
        <div className="mb-6"><b>
     Upload your</b> <span className="font-css top"><b>Photo</b></span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
<br></br>
<br></br>

<input class="btn" type="submit" value="Register" onClick={createUser}/><br></br>
<br></br>
</div>

    
        </center>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm;
