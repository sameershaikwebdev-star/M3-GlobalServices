import api from "./axios";

export const applyCareer = async (resume: File) => {
  const formData = new FormData();

  formData.append("resume", resume);

  const response = await api.post(
    "/api/careers/apply",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};