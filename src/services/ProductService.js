import useToken from "antd/es/theme/useToken";
import { baseUrl } from "../config/api";

const url = baseUrl + "product";

const token = localStorage.getItem("token-user");

export async function createProduct(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (response.status == 200) {
      const json = await response.json();
      return {
        success: true,
        data: json.message,
      };
    }

    const json = await response.json();

    return {
      success: false,
      data: json.message,
    };
  } catch (error) {
    return {
      success: false,
      data: "ម៉ានស៊ីមេកំពុងមានបញ្ហា",
    };
  }
}

export async function GetAllProduct(size, page, tok) {
  try {
    const response = await fetch(url + "?size=" + size + "&page=" + page, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tok}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      const json = await response.json();

      return {
        success: true,
        data: {
          data: json.data,
          total_page: json.totalPage,
        },
      };
    }
  } catch (error) {
    return { success: false, data: "ម៉ានស៊ីមេកំពុងមានបញ្ហា" };
  }
}
