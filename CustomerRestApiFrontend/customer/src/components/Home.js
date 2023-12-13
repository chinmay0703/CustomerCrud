import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const formSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user/signin', {
        params: {
          username: username,
          password: password,
        },
      });
     console.log('Response:', response.data);
      navigate('/customerlist');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  // http://localhost:8080/user/signin?username=test@sunbasedata.com&password=Test@123

  return (
    <div className='container'>
      <h1 className='text-center'>Login Page</h1>

      <form className='group py-3'>
        <label htmlFor='email'>Email</label>
        <input
          className='form-control'
          type='email'
          placeholder='Enter the email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          type='password'
          placeholder='Enter the password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary my-3' type='button' onClick={formSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
