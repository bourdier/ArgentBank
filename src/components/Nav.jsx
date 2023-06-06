export default function Navbar() {
  const isLoggedIn = false; // Temp value to test the component without having to log in and out
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isLoggedIn ? (
          <>
            <a className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="./index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}
