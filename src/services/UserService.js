import { baseUrl } from "../config/api";

export const getAllAsync = async (size, page) => {
  try {
    const response = await fetch(
      baseUrl + "user?size=" + size + "&page=" + page,
      {
        method: "GET",
      },
    );

    if (response.status == 200) {
      const success = await response.json();
      return {
        status: 200,
        datas: success.data,
        totalPage: success.totalPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
