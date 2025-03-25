import { createGetReq } from ".";

export interface UserInfo {}

export const userApi = {
  checkLogin: async (): Promise<UserInfo> => await createGetReq("/api/user/checkLogin"),
};
