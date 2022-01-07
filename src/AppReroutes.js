import Header from './Header';
import App from './App';
import HeadTittle from './HeadTittle';
import Footer from './Footer';
import Home from './Slider';
import About from './About';
import Contact from './Contact';
import Reg from './RegisHead';
import Downl from  './Downloads';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function Applir() {
  return (
   
   <Router>
    <Header/>
    <App/>
    <HeadTittle/>
    
<Switch>
  
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Register" exact component={Reg} />
          <Route path="/Download" exact component={Downl} />

</Switch>
 <Footer/>
    </Router>
   

  );
}

export default Applir;
