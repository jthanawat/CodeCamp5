import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './Container/RegisterForm/RegisterForm';
import Antd from './Antd';
import FormValidation from './FormValidation';

function App() {
  return (
    <div className="App">
      {/* <RegisterForm /> */}
      {/* <Antd /> */}
      <FormValidation />
    </div>
  );
}

export default App;
