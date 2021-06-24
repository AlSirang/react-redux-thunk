import axios from "axios";

let jsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPostsList = async () => await jsonPlaceholder.get("/posts");

export const getUsers = async (userId) =>
  await jsonPlaceholder.get(`/users/${userId}`);
