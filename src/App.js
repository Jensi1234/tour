
import './App.css';

import {Routes,Route} from "react-router-dom";
import Home from './routes/Home';
// import travel from './routes/travel';
import About from './routes/About';
import Travel from './routes/Travel';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Profile from './routes/Profile'
import Navbar1 from './components/Navbar1';
import {data } from './components/data';
import Login  from './components/Login';
import Register from './components/Register';




function App() {

    

  return (
    <div className='APP'>
      <Routes>
        <Route path='/Home' element={<Home  />} />
        <Route path='/travel' element={<Travel  />} />
        {/* <Route path='/travel' element={<travel/>}/> */}
        <Route path='/about' element={<About />} />
        <Route path='/service' element={ <Service product={data} />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/Navbar1' element={<Navbar1  product={data}/> }/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/' element={<Register />}/>
      
      </Routes>

        
    </div>
  );
}

export default App;
