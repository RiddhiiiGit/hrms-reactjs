import { TenantRegistrationURL } from "./apiConstant";
import { AxiosAuthServices } from "./axios/axiosService";

export function TenantRegistrationApi(data) {
  const response = AxiosAuthServices.post(TenantRegistrationURL, data);
  return response;
}
