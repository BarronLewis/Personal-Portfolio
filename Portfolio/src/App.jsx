import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Todo from './components/pages/Todo';
import Timer from './components/pages/Timer';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/todo' exact Component={Todo}/>
          <Route path='/timer' exact Component={Timer}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
