import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const username = useSelector((state) => state.usersData.username);
  const email = useSelector((state) => state.usersData.email);
  const navigate = useNavigate();

  function splitEmail(email) {
    const first = email[0].toUpperCase();
    const rest = email.slice(1, email.indexOf("@"));
    return first + rest;
  }

  function settings() {
    navigate('/settings');
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
        {username ? username : splitEmail(email)}
      </h1>
      <button className="button edit" onClick={() => settings()}>
        Edit Name
      </button>
    </>
  );
}
