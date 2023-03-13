
import './styles.css';
import Navbar from './Navbar';
import Details from './details';
import Skills from './Skills';
import Resume from './Resume';
import {BrowserRouter} from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
    <div className="App">
   
   <Navbar />
   <Details />
   <Skills />
    <Resume />
    </div>
    </BrowserRouter>
    </>
  
}

export default App;
