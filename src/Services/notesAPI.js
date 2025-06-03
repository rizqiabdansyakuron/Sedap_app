import axios from 'axios'

const API_URL = "https://pfviwyqiuwhuxzusyqcp.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdml3eXFpdXdodXh6dXN5cWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDc0MTcsImV4cCI6MjA2NDQ4MzQxN30.299BKKbBtM-78nPhkB41ErPj3-87LXKOZnYS3eZChX0"

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
