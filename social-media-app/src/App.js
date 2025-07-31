import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Frontpage from './pages/home/Frontpage';
import FrontpageSignup from './pages/home/FrontpageSignup';
import SidebarItems from './components/sidebar/api_pages/SidebarItems';


function Counter() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage/>}/>
          <Route path='/signup' element={<FrontpageSignup/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/feed' element={<SidebarItems />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Counter;