import { useState } from 'react';
import './App.css';
import { Login } from './components/Admin/Login';
import FreeAuthRoute from "./routes/FreeAuthRoute";
import {ProtectedRoute} from "./routes/ProtectedRoute";
import Layouts from './conatainers/Layouts';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users/Index';
import AddUser from './components/Admin/Users/AddUser';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={ <FreeAuthRoute><Login /></FreeAuthRoute> } />
          <Route exact path="/dashboard" element={  <ProtectedRoute><Layouts><Dashboard /></Layouts></ProtectedRoute> } />
          <Route exact path="/users" element={  <ProtectedRoute><Layouts><Users /></Layouts></ProtectedRoute> } />
          <Route exact path="/add-user" element={  <ProtectedRoute><Layouts><AddUser /></Layouts></ProtectedRoute> } />
         </Routes>
      </Router>
    </>
  );
}

export default App;
