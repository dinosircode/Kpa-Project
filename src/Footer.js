
import './App.css';
import lo1 from './lo1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';


import l7 from './l7.png';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <div id="FooterMains">
      <br>
      </br>
              <div id="TableFoot">
 <a href="https://www.pmindia.gov.in/en/" target="_blank"><img src={lo1}className="App-logo"alt="lo1"/></a> 
         
 <a href="https://www.mha.gov.in/" target="_blank"><img src={l2}className="App-logo"alt="l2"/></a> 
       
 <a href="https://www.india.gov.in/" target="_blank"><img src={l3}className="App-logo"alt="l3"/></a> 
 
 <a href="https://swachhbharatmission.gov.in/sbmcms/index.htm" target="_blank"><img src={l4}className="App-logo"alt="l4"/></a> 
        
 <a href="https://gandhi.gov.in/" target="_blank"><img src={l5}className="App-logo"alt="l5"/></a> 
         
         

         <div id="Foot2nd">
      
       <img src={l7} className="FootLogo"/><span id="HeadFoot">Quick Links</span>
       <br/>
       <br></br><span id="whitefontfoot">
       Kerala police is a citizen friendly police&emsp;&emsp;&emsp;
 <a href="https://www.kerala.gov.in/" target="_blank"><span id="LinkColor">Govt of Kerala</span></a> 
       &emsp;&emsp;
       <a href="https://keralapolice.gov.in/" target="_blank"><span id="LinkColor">Kerala Police</span></a> 
      &emsp;&emsp; 
      <a href="https://cyberdome.kerala.gov.in/" target="_blank"> <span id="LinkColor">Kerala Police Cyberdome</span></a>
      &emsp;&emsp;&emsp;
       <br></br>
      organisation. We value your suggestions
      


        <br></br>
         and feedback. Please give your valuable 
      &emsp;&emsp;<a href="https://www.nda.nic.in/" target="_blank"> <span id="LinkColor">National Defence Academy</span></a>&emsp;&emsp;<a href="https://www.nia.gov.in/" target="_blank"><span id="LinkColor"> National Investigation Agency</span></a><br></br> feedback.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="https://www.nsg.gov.in/" target="_blank"> <span id="LinkColor">National Security Guard</span></a>
     &emsp;
        
        </span>

         </div>
         </div>


    </div>

<div id="BenithFoot">
<br></br>
<span id="lastdi"><center>Copyrights @ Department of Kerala Police | Portal of Kerala State Police maintained by Information and Communication Technology Wing, SCRB, <br></br>Thiruvananthapuram. (webadminscrb.pol@kerala.gov.in). | Best Viewed in All popular Web Browsers.</center></span>
</div>
    </div>  
    </Router>
  );
}

export default App;