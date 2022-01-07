import clock from './clock.png';
import login from './login.png';
import sitemap from './sitemap.png';
import './App.css';
import DateTime from './dateTime';

function App() {
  return (
    <div className="App">
      <header className="BrownBackground">
    <img src={clock} className="App-logo" alt="logo" /> 
    <DateTime></DateTime>
  <span id="rightpos">
<font size="4.5"><span id="whitetext"><img src={login} className="App-logo" alt="logo" /> Login

&emsp;
<img src={sitemap} className="App-logo" alt="logo" /> Sitemap
</span></font>&emsp;&emsp;&emsp;
    </span>  </header>

    </div>
  );
}




export default App;


