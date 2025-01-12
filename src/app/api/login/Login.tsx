import axios from "axios";

const API_URL = "http://localhost:3001/barapp/v1/auth/login";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  data: {
    token: string
  }

}

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(API_URL, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
};
