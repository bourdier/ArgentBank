import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Edit() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const username = useSelector((state) => state.usersData.username);
  const email = useSelector((state) => state.usersData.email);
  const token = useSelector((state) => state.usersData.token);

  function splitEmail(email) {
    const first = email[0].toUpperCase();
    const rest = email.slice(1, email.indexOf("@"));
    return first + rest;
  }

  function edit() {
    setIsOpen(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    // dispatch(setEdit(username, token));
    setIsOpen(false);
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
        {username ? username : splitEmail(email)}
      </h1>
      <button className="button edit" onClick={() => edit()}>
        Edit Name
      </button>

      {isOpen && (
        <div className="modal">
          <button className="button close" onClick={() => setIsOpen(false)}>
            x
          </button>
          <form className="modal__content" onSubmit={handleFormSubmit}>
            <div className="input__wrapper">
              <label htmlFor="username">New username</label>
              <input
                type="text"
                id="username"
                className="input__wrapper"
                required="required"
              />
              <button className="button edit" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
