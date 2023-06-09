import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Account from "../components/Account";
import Edit from "../components/Edit";

export default function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.usersData.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <Edit />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
