
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Createacc from './Components/Home/Login/Creactacc'
import UserPg from './Components/CoursePg/UserPg'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/craccnt' element={<Createacc/>}/>
      <Route path='/userpg/*' element={<UserPg/>}/>
      </Routes> 
    </div>
  );
}

export default App;
