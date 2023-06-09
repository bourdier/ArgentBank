import { setUsername } from "./reducer";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.status === 200) {
      dispatch(
        setUsername({
          username: username,
          isLoggedIn: true,
          token: data.body["token"],
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};