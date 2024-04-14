const baseUrl = "https://reqres.in";

export const registerUrl = () => {
  return baseUrl + "/api/register";
};
export const loginUrl = () => {
  return baseUrl + "/api/login";
};
export const userDetailUrl = (id: number) => {
  return baseUrl + "/api/users/" + id;
};
