import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NewPassword from './pages/NewPassword'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      {/* <div>
        <Link to='/'>Login</Link> <br />
        <Link to='/home'>Home</Link> <br />
        <Link to='/newpassword'>NewPassword</Link> <br />
        <Link to='/register'>Register</Link> <br />
      </div> */}
      
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
