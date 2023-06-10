import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfileData } from "../redux/profile/action";
import Account from "../components/Account";
import Edit from "../components/Edit";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.usersData.isLoggedIn);
  const token = useSelector((state) => state.usersData.token);

  dispatch(getProfileData(token));

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
