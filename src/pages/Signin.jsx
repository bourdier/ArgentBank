import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.usersData.token);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark">
      <section className="form">
        <i className="fa fa-user-circle form__icon"></i>
        <h1>Sign In</h1>
        {incorrect && ( 
          <div className="error">
            <i className="fa fa-exclamation-circle error__icon"></i>
            <p>
              Incorrect email address or password. Please try again.
            </p>
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="input__wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
          </div>
          <div className="input__wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
          </div>
          <div className="input__remember">
            <input type="checkbox" id="remember__me" />
            <label htmlFor="remember__me">Remember me</label>
          </div>
          <button className="button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
