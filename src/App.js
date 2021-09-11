import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllUsers from './pages/AllUsers';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Navbar></Navbar>
            <Home></Home>
          </Route>

          <Route path='/allusers'>
            <Navbar></Navbar>
            <AllUsers></AllUsers>
          </Route>

          <Route path='/adduser'>
            <Navbar></Navbar>
            <AddUser></AddUser>
          </Route>

          <Route path='/edituser/:userId'>
            <Navbar></Navbar>
            <EditUser></EditUser>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
