import api from "./axios";

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactMessage = async (data: ContactRequest) => {
  const response = await api.post("/api/contact", data);
  return response.data;
};
  export const getAllContacts = async () => {
  const response = await api.get("/api/contact");
  return response.data;
};