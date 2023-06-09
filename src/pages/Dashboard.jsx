import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Account from "../components/Account";

export default function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.usersData.isLoggedIn);
  const username = useSelector((state) => state.usersData.username);
  const email = useSelector((state) => state.usersData.email);

  function splitEmail(email) {
    const first = email[0].toUpperCase();
    const rest = email.slice(1, email.indexOf("@"));
    return first + rest;
  }

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username ? username : splitEmail(email)}
        </h1>
        <button className="button edit">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
