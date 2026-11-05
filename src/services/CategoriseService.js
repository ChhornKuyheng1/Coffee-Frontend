import { message } from "antd";
import { baseUrl } from "../config/api";

const url = baseUrl + "categorise";

const token = localStorage.getItem("token-user");

export async function getAllCategory(tok) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tok}`,
        "Content-Type": "application/json",
      },
    });

    const data = { success: false, data: null };

    if (response.status == 200) {
      const json = await response.json();
      data.data = json.data;
      data.success = true;
      return data;
    }
    return data;
  } catch (error) {
    return { success: false };
  }
}

export async function createCategory(newCategory) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Category: newCategory,
        Status: true,
      }),
    });
    const data = { success: false, message: "" };
    if (response.status == 200) {
      const json = await response.json();
      data.success = true;
      data.message = json.message;
      return data;
    }
    const json = await response.json();
    data.message = json.message;
    return data;
  } catch (error) {
    return { success: false, message: "ម៉ានស៊ីមេកំពុងមានបញ្ហា" };
  }
}
