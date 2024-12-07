import axios from "axios";
import UserAPI from "./userAPI";

export const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
export const JSON_URL = "https://jsonplaceholder.typicode.com";
class API {
  #baseURL = BASE_URL;
  #client;
  user;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.user = new UserAPI(this.#client);
  }
}

const api = new API();

export default api;
