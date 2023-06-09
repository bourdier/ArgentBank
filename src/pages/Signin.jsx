import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: username,
      password: password
    };

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          // window.location.replace("./dashboard");
          
          console.log(data.status, data.body['token']);
        } else {
          console.log(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <main className="main bg-dark">
      <section className="form">
        <i className="fa fa-user-circle form__icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input__wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input__wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember__me" />
            <label htmlFor="remember__me">Remember me</label>
          </div>
          <button className="button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}