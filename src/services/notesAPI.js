import axios from 'axios'

const API_URL = "https://rhsykmwbrauwyodkqhxu.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoc3lrbXdicmF1d3lvZGtxaHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzExMzcsImV4cCI6MjA2NDUwNzEzN30.HTPWgtIB7Faeugf3XSPc4_6BL3v_E67oyHpDpJOM2A0"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },

    async updateNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
        return response.data;
    }
}
