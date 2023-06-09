import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

export default function Edit() {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector((state) => state.usersData.username);
  const email = useSelector((state) => state.usersData.email);

  function splitEmail(email) {
    const first = email[0].toUpperCase();
    const rest = email.slice(1, email.indexOf("@"));
    return first + rest;
  }

  function edit() {
    setIsOpen(true);
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

      <ReactModal 
        isOpen={isOpen} 
        portalClassName="modal">
          <button className="button close" onClick={() => setIsOpen(false)}>
            X
          </button>
          <h2>New username:</h2>
          <input type="text" />
          <button className="button edit" onClick={() => setIsOpen(false)}>
            Save
          </button>
      </ReactModal>
    </>
  );
}
