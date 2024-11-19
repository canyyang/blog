import { AxiosResponse } from 'axios';
import axios from "./axios";
import { BlogItem } from '../types/type';


export async function getList(): Promise<Array<BlogItem>> {
  try {
    const res: AxiosResponse<Array<BlogItem>> = await axios.get('/list');
    return res.data;
  } catch (error) {
    console.error("网络异常", error);
    throw error;
  }
}

export function getArticle(id:string): Promise<string> {
  return axios.get(`/blog?id=${id}`)
    .then((res: AxiosResponse<string>) => {
      return res.data;
    })
    .catch((error) => {
      console.error("网络异常", error);
      throw error;
    });
}
