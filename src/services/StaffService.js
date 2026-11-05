import { baseUrl } from "../config/api";

const url = baseUrl + "staff";

const token = localStorage.getItem("token-user");

export async function GetAllStaff(tok) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tok}`,
        "Content-Type": "application/json",
      },
    });
    const datas = await response.json();
    if (response.status == 200) {
      return {
        success: true,
        data: datas.data,
      };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function createStaff(datas) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: datas,
    });
    const data = await response.json();
    if (response.status == 200) {
      return { success: true, message: data.message };
    }
    return { success: false, message: data.message };
  } catch (error) {
    return { success: false };
  }
}
