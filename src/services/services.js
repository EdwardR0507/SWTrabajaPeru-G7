import axios from "axios";
import GlobalEnv from "../GlobalEnv";

let response, res;
export const fetchData = async (token, action, path, command, data) => {
  try {
    if (action === "GET") {
      response = getData(token, path, command);
    } else if (action === "POST") {
      response = postData(token, path, command, data);
    }
    console.log("response fetchData:");
    console.log(response);
  } catch (e) {}
  return response;
};

const getData = async (token, path, command) => {
  const rpta = await axios.post(
    `${GlobalEnv.host}/${path}`,
    {
      command: command,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return rpta.data;
};

const postData = async (token, path, command, data) => {
  const ans = await axios.post(
    `${GlobalEnv.host}/${path}`,
    {
      command: command,
      transaction: data,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return ans.data;
};

export const fetchUserData = async (action, path, command, data) => {
  try {
    if (action === "GET") {
      res = getDataHome(path, command);
    } else if (action === "POST") {
      res = sendData(path, command, data);
    }
  } catch (error) {}
  return res;
};
export const getDataHome = async (path, command) => {
  const rpta = await axios.post(`${GlobalEnv.host}/${path}`, {
    command: command,
  });
  return rpta.data;
};

export const sendData = async (path, command, data) => {
  const answer = await axios.post(`${GlobalEnv.host}/${path}`, {
    command: command,
    transaction: data,
  });
  return answer.data;
};
