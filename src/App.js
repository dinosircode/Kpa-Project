import logo from './logo.svg';
import kplogo from './kp-logo.png';
import kp from './kp.png';
import india from './india.gif';
import gov from './gov.png';
import './App.css';


function App() {
  return (
    <div className="App">
    <div id="HeaderMains">
    <img src={kplogo} className="Kplogo" /><img src={kp}/><img src={india} className="Kplogo"/>
     &emsp; 
  &emsp;   &emsp;  
      <span><img src={gov} className="govlog" />&emsp;</span>
      <br></br>
      <br></br>
    </div>
    </div>  
  );
}

export default App;
