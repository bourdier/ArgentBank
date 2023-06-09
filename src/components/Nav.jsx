import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearPersistedState } from "../redux";
import Logo from "../assets/images/argentBankLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.usersData.isLoggedIn);

  const handleLogout = () => {
    navigate('/login');
    navigate(0)
    clearPersistedState();
    console.log("logged out");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav__logo">
        <img
          className="main-nav__logo__image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/user" className="main-nav__item">
              <i className="fa fa-user-circle main-nav__icon"></i>
              Tony
            </Link>
            <Link to="#" className="main-nav__item" onClick={handleLogout}>
              <i className="fa fa-sign-out main-nav__icon"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav__item">
            <i className="fa fa-user-circle main-nav__icon"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
