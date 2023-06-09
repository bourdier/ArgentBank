import { useSelector } from "react-redux";
import Account from "../components/Account";

export default function Dashboard() {
  const user = useSelector((state) => state.usersData);
  console.log(user)

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          User!
        </h1>
        <button className="button edit">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
