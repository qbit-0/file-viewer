import axios from "axios";

const apiUrl = "http://localhost:8080/api";

export const fetchDir = async (dirPath) => {
  const { data } = await axios.get(`${apiUrl}/files`, {
    params: { dir_path: dirPath },
  });

  return data;
};

export const fetchFile = async (filePath) => {
  const { data } = await axios.get(`${apiUrl}/file`, {
    params: { file_path: filePath },
  });

  return data;
};
