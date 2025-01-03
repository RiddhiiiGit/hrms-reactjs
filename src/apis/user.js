import { UserCreateURL } from "./apiConstant";
import { AxiosAuthServices } from "./axios/axiosService";

export function UserCreateApi(data) {
  const response = AxiosAuthServices.post(UserCreateURL, data);
  return response;
}
