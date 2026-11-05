import { baseUrl } from "../config/api";

const url = baseUrl + "role";

export async function getAllRole(token) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status == 200) {
      return {
        success: true,
        data: data.data,
      };
    }
    return {
      success: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
