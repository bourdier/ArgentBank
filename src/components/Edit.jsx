import { useDispatch, useSelector } from "react-redux";
import { setProfileUsername } from "../redux/profile/action";
import { useState } from "react";

export default function Edit() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const username = useSelector((state) => state.profileData.username);
  const firstname = useSelector((state) => state.profileData.firstname);
  const lastname = useSelector((state) => state.profileData.lastname);
  const token = useSelector((state) => state.usersData.token);

  if (!token) {
    return;
  }

  function edit() {
    setIsOpen(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    dispatch(setProfileUsername(token, username));
    setIsOpen(false);
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="button edit" onClick={() => edit()}>
        Edit Name
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal__overlay">
            <form className="form form--edit" onSubmit={handleFormSubmit}>
              <h2>Edit profile</h2>
              <div className="input__wrapper">
                <label htmlFor="username">User name</label>
                <input
                  type="text"
                  id="username"
                  className="input__wrapper"
                  required="required"
                />
              </div>
              <div className="input__wrapper">
                <label htmlFor="firstname">First name</label>

                <input
                  type="text"
                  id="firstname"
                  className="input__wrapper disabled"
                  readOnly="readonly"
                  value={firstname}
                />
              </div>
              <div className="input__wrapper">
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  id="lastname"
                  className="input__wrapper disabled"
                  readOnly="readonly"
                  value={lastname}
                />
              </div>
              <div className="form--edit__button">
                <button className="button edit" type="submit">
                  Save
                </button>
                <button
                  className="button edit"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
