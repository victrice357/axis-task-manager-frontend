
export const fetchMessage = async () => {
    try {
        const response = await fetch("http://localhost:8000/"); // Change to localhost
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { message: "Error connecting to Axis API" };
    }
};

