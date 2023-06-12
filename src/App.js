import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import About from './components/about';
import Contact from './components/Contact';
import AddMedicine from './components/AddMedicine';
import HandleStorage from './components/HandleStorage';
import HealthReport from './components/HealthReport';
import Appointments from './components/Appointments';
import HealthTips from './components/Healthtips';
import HealthGame from './components/HealthGame';
import Alert from './components/Alert';

function App() {
  const {getUserName}  = HandleStorage()
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home></Home>}>
      </Route>
      <Route path='/login' element={null?<Home></Home>:<Login></Login>}>
      </Route>

      <Route path='/dashboard' element={<Dashboard></Dashboard>}>
      </Route>

      <Route path='/about' element={<About></About>}>
      </Route>

      <Route path='/Contact' element={<Contact></Contact>}>
      </Route>

      <Route path='/AddMedicine' element={<AddMedicine></AddMedicine>}>
      </Route>

      <Route path='/HealthReport' element={<HealthReport></HealthReport>}>
      </Route>

      <Route path='/Appointments' element={<Appointments></Appointments>}>
      </Route>

      <Route path='/Healthtips' element={<HealthTips></HealthTips>}>
      </Route>

      <Route path='/HealthGame' element={<HealthGame></HealthGame>}>
      </Route>

      <Route path='/Alert' element={<Alert></Alert>}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
