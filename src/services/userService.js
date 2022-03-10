import httpService from "./httpService";
import { accessToken, apiEndpoint } from "../config";

export async function registerStudent(body) {
  return httpService.post(
    `${apiEndpoint}/students?access_token=${accessToken}`,
    body,
    { headers: { "user-type": "student" } }
  );
}
