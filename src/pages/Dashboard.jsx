import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfileData } from "../redux/profile/action";
import Account from "../components/Account";
import Header from "../components/Header";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const token = useSelector((state) => state.usersData.token);

  dispatch(getProfileData(token));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <Header />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account 
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
      />
    </main>
  );
}
