import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
    
    const useInputValue = initialValue => {
        const [value, setValue] = useState(initialValue);

        return {
            value,
            onChange: e=> setValue(e.target.value)
        }
    }

    const username = useInputValue('');
    const password = useInputValue('');

    const submitForm = (username, password) => {
        const endpoint = `http://localhost:5000/api/auth/${props.login?'login':'register'}`;
      
        axios
          .post(endpoint, {username, password})
          .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/todos');
          })
          .catch(err => {
            console.error('Login Error', err);
          });
      };
    return (
            <form onSubmit={(e)=> {
                e.preventDefault();
                submitForm(username.value, password.value)
            }}>
                <input type="text" {...username} placeholder="Username" required />
                <input type="password" {...password} placeholder="Password" autoComplete="password" required />
                <button type="submit">{props.login ? 'Login' : 'Register'}</button>
            </form>
    )
}

export default Form
