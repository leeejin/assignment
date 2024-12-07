import { AxiosError, AxiosInstance } from "axios";
import { LogInUserType, UserType } from "../types/type";

class UserAPI {
  #client;
  constructor(client: AxiosInstance) {
    this.#client = client;
  }
  //유저 정보 불러오기
  async getUser(accessToken: string | null) {
    try {
      const response = await this.#client.get("/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return response.data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw { status: response.status, data: response.data };
      }
      throw error;
    }
  }
  // 유저 회원가입
  async registerUser(userData: UserType) {
    console.log(userData);
    try {
      const response = await this.#client.post("/register", userData);
      const data = response.data;

      return data;
    } catch (error) {
      const { response: errorRes } = error as unknown as AxiosError;

      if (errorRes) {
        throw { status: errorRes.status, data: errorRes.data };
      } else throw error;
    }
  }
  // 유저 로그인
  async logInUser(userData: LogInUserType) {
    try {
      const response = await this.#client.post("/login", userData);
      const data = response.data;
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw { status: response.status, data: response.data };
      }
      throw error;
    }
  }
  //유저 정보 수정
  async updateUser() {}
  // 유저 로그아웃
  async logOutUser() {}
}

export default UserAPI;
