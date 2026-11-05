import { message } from "antd";
import { baseUrl } from "../config/api";

const url = baseUrl + "branch";

const token = localStorage.getItem("token-user");

export async function getBranchIdAndName(tn) {
  try {
    const response = await fetch(url + "/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tn}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status == 200) {
      return {
        success: true,
        data: data,
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

export async function getAllBranche(tn, page) {
  try {
    const response = await fetch(url + "?size=10&page=" + page, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tn}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      const json = await response.json();
      return {
        success: true,
        data: {
          data: json.data,
          totalPage: json.totalPage,
        },
      };
    }

    return {
      success: false,
    };
  } catch (error) {
    return { success: false };
  }
}

export async function createBranche(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status == 200) {
      const data = await response.json();
      return { success: true, message: data.data.message };
    }

    return { success: false };
  } catch (error) {
    return { success: false, message: "ម៉ានស៊ីមេកំពុងមានបញ្ហា" };
  }
}
