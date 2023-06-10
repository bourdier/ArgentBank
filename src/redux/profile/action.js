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

export const getProfileUsername = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer' + token,
      },
    });

    const data = await response.json();
    console.log(data);

    dispatch(
      setProfile({
        username: data.body.userName,
        firstname: data.body.firstName,
        lastname: data.body.lastName,
      })
    );
  } catch (error) {
    console.log(error);
  }
};