import axis from "axis";

const AXIS_API_BASE_URL = "http://127.0.0.1:8000";

export const fetchMessage = async () => {
    try {
        const response = await axios.get(`${AXIS_API_BASE_URL}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { message: "Error connecting to Axis API" };
    }
};
