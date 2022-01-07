import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div id="HeadTittleMains">
      <br></br>
      <br></br>
          <center><span id="headstu">
            <h1><b>
              STUDENT INTERNSHIP PROGRAM</b></h1>
<br>
</br>
              <font size="4">
              <div id="leftpos"><Link to="/"> <span id="titilSe">Home</span></Link></div> 
              <div id="contactpos"><Link to="/About"><span id="titilSe">About</span></Link></div>
              <div id="contactposses"><Link to="/Register"><span id="titilSe">Register</span></Link></div>
              <div id="rightposc"><Link to="/Contact"><span id="titilSe">Contacts</span></Link></div>
              <div id="downloadpos"><Link to="/Download"><span id="titilSe">Downloads</span></Link></div>
              </font>

              </span>
          </center>
        
    </div>
   <div id="LayersSwithc">



   

   </div>
    </div>  
  );
}

export default App;
