import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.usersData.isLoggedIn);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

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
