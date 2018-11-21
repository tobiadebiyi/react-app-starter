import { get, post } from "../services/HttpService";
import config from "../config";

const getAll = (): Promise<any[]> => {
  return get(`${config.apiUrl}/api/app`);
};

const create = (request: any): Promise<any> => {
  return post(`${config.apiUrl}/api/app`, request);
};

export const AppApi = {
  getAll,
  create,
};