import httpService from "./httpService";
import { accessToken, apiEndpoint } from "../config";

export async function registerStudent(body) {
  return httpService.post(
    `${apiEndpoint}/students?access_token=${accessToken}`,
    body,
    { headers: { "user-type": "student" } }
  );
}

// export async function authenticate(body) {
//   return httpService.post(
//     `${apiEndpoint}/auth?access_token=${accessToken}`,
//     body,
//     { headers: { "email": data.email, "password": data.password } }
//   );
// }
