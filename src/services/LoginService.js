import { baseUrl } from "../config/api";

const url = baseUrl + "login";

export async function userLogin(username, password, option) {
  try {
    const response = await fetch(
      url + "/" + option + "?username=" + username + "&password=" + password,
      { method: "POST" },
    );
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token-user", data.token);
      return {
        role: data.role,
        status: response.status,
        success: true,
      };
    }
    return {
      success: false,
      message: data.message,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Service is down",
    };
  }
}

export async function checkRole(token) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      const data = await response.json();
      return { success: true, data: data.data };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
