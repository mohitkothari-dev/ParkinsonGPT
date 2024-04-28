
export const sendMsgToAI = async (msg) => {
    // Remove OpenAI specific details
  
    const API_URL = process.env.REACT_APP_API_KEY; // Replace with your actual API endpoint URL
    const apiKey = process.env.REACT_APP_BEARER_TOKEN; // Replace with your actual API key (consider environment variables)
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: msg })
      });
  
      const responseData = await response.json();
  
      // Handle response based on your API's structure
      if (responseData && responseData.text) { 
        return responseData.text;
      } else {
        console.error('Error: Your API response did not contain a valid response field.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    