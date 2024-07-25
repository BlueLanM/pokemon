import api from "@/utils/request";

export function getUser(params: any) {
  return api({
    url: "api/User/searchUser",
    method: "get",
    params,
  });
}

export function addUser(data: any) {
  return api({
    url: "api/User/addUser",
    method: "post",
    data,
  });
}

export function deleteUser(params: any) {
  return api({
    url: `api/User/deleteUser`,
    method: "delete",
    params,
  });
}

export function updateUser(data: any) {
  return api({
    url: `api/User/updateUser`,
    method: "post",
    data,
  });
}

export function registerUser(data: any) {
  return api({
    url: `api/User/registerUser`,
    method: "post",
    data,
  });
}
export function loginUser(data: any) {
  return api({
    url: `api/User/login`,
    method: "post",
    data,
  });
}
