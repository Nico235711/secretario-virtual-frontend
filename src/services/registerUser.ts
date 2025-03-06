import { api } from "@/lib/axios"
import { DraftUser } from "@/types"

export const registerUser = async (action, data) => {
  try {
    console.log(data);
    const response = await api.post(`/autenticacion/registro/${action}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
};