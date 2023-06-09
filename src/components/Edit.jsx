import { useSelector } from "react-redux";

export default function Edit() {
  const username = useSelector((state) => state.usersData.username);
  const email = useSelector((state) => state.usersData.email);

  function splitEmail(email) {
    const first = email[0].toUpperCase();
    const rest = email.slice(1, email.indexOf("@"));
    return first + rest;
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
        {username ? username : splitEmail(email)}
      </h1>
      <button className="button edit">Edit Name</button>
    </>
  );
}
