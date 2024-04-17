import axios from "axios";
import { API_URL } from "../environment";
import { Finance } from "../interfaces";

export async function search(text: string) {
  const res = await axios.get<any>(`${API_URL}/search/${text}`);
  return res;
}

export async function quoteSummary(text: string) {
  return await axios.get<Finance.QuoteSummary>(
    `${API_URL}/quote-summary/${text}`
  );
}
