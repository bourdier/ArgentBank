import { setAuth } from "./reducer";
import { setError } from "../error/reducer";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    dispatch(
      setAuth({
        email: email,
        isLoggedIn: true,
        token: data.body["token"],
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      setError({
        incorrect: true,
      })
    );
  }
};
