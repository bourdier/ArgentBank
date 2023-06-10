import { setProfile } from "./reducer";

export const setProfileUsername = (token, username) => async (dispatch) => {
  try {
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
        userName: username,
      },
    });

    dispatch(
      setProfile({
        username: username,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
