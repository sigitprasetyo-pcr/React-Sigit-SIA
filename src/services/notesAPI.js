import axios from "axios";

const API_URL = "https://kopmpboquqevrqamzvzx.supabase.co/rest/v1/notes";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvcG1wYm9xdXFldnJxYW16dnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ5NzAsImV4cCI6MjA5NjUyMDk3MH0.61LTQDWW-Ji_FHIXrNhfP4LHQ4UdCrUsIcTj0CXJpdk";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(`${API_URL}?select=*&order=created_at.desc`, {
      headers,
    });

    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(
      API_URL,
      {
        title: data.title,
        content: data.content,
      },
      { headers }
    );

    return response.data;
  },

  async deleteNote(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers,
    });

    return response.data;
  },
};