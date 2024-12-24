import axiosInstance from "../baseapi";
import { API_ENDPOINTS } from "../constants";

export class BracketsService {
    async displayCombination(payloadData) {
        console.log(payloadData, "payloadData");
        try {
            const { data } = await axiosInstance.post(`${API_ENDPOINTS.GENERATE_PARANTHESES}`, { ...payloadData });
            return data;
        } catch (error) {
            console.log('Error fetching data:', error.message);
            return error;
        }
    }
}