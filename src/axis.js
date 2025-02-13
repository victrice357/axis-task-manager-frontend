export const fetchMessage = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/"); // Ensure this URL is correct
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);  // ✅ Debugging step
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { message: "Error connecting to Axis API" };
    }
};
