import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Todo Web App
      </h1>
      
      <Route path='/' exact render={(props)=>(
        <LoginForm {...props} />
      )} />

      <Route path='/todos' exact render={(props)=>(
        <div>
          <Todos {...props} />
        </div>
      )} />

    </div>
  );
}

export default App;
