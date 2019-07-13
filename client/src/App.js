import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Form from './components/Form';
import Todos from './components/Todos';
import './App.css';

function App(props) {
  const logout = ()=>{
    localStorage.removeItem('token')
  }
  const Navbar = ()=>(
    <ul className="nav">
      
      <li className="nav-item">
        <button className="nav-link active" onClick={()=> {
          props.history.push('/register')
        }}>
          Register
        </button>
      </li>
      <li className="nav-item">
        <button className="nav-link active" onClick={()=> {
          logout()
          props.history.push('/')
        }}>
          Logout
        </button>
      </li>
      
  </ul>
  )
  return (
    <div className="App">
      <Navbar />
        <h1>
          Todo Web App
        </h1>
        <Route path='/todos' exact render={(props)=>(
          <div>
            <Todos {...props} />
          </div>
        )} />
        
        <Route path='/' exact render={(props)=>(
          <Form {...props} login/>
        )} />
      
      <Route path='/register' exact render={(props)=>(
        <Form {...props}/>
      )} />

    </div>
  );
}


export default withRouter(App);
