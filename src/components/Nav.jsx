import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/argentBankLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = true; // Temp value to test the component without having to log in and out

  const handleLogout = () => {
    // Temp function to test the component without having to log in and out
    console.log("Log out");
    navigate("/", { replace: true });
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav__logo">
        <img
          className="main-nav-logo__image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/user" className="main-nav__item">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link to="#" className="main-nav__item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav__item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
