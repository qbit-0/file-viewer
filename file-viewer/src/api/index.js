import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchDir = async (dirPath) => {
  const { data } = await axios.get(`${apiUrl}/api/files`, {
    params: { dir_path: dirPath },
  });

  return data;
};
