import './App.css';
import './down.css';
import { useState } from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";  

        function MyForm() {
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

  return (
      
    
    <form class="form" onSubmit={handleSubmit}>
        <center>
        <div class="studimg">
            <h1 class="personal"><b>Student Internship Form</b></h1>
            
        </div>
     
          <div id="hellos"><b>No.&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;  Form Heading&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;</b>
        
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Download 

          </div>
<br/>
          <div id="helloss"><b>1.&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp; &emsp; &emsp; Registration Form&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;</b>
        
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<a href="https://drive.google.com/file/d/1vk8Ek6R8pDTksLVj9tqtWnb-Ij2btvib/view?usp=sharing" target="_blank">Click Here To Download Form</a> 

          </div>
        
         <br></br>  
        <br></br>
        <div class="contentimg">
          <br></br>
<br>
</br>      
      <br></br>
      <br></br>
      
      
        </div>
        </center>
        </form>
        )
  }
        ReactDOM.render(<MyForm />, document.getElementById('root'));


export default MyForm ;