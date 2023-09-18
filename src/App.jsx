import "./App.css";
import Landing from './components/Landing';
import Login from './components/Login'
import NewUser from './components/newUser'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<NewUser />} />
      </Routes>
    </>
  );
}