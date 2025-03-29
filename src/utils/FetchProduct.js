export const fetchData = async (url) => {
    try {
      console.log("🔄 Fetching from:", url);
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store", // Prevents caching issues
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("✅ Fetch Success:", data);
  
      // Ensure data is an array
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.log("❌ Fetch Error:", error.message);
      return [];
    }
  };
  
