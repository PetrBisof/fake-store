// Import necessary modules
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Define useFetch custom hook
const useFetch = (url) => {
  // Set initial states
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  // Define fetch function
  const fetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  // Fetch data using axios when isLoading is true
  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        return;
      }
      try {
        const res = await axios(url, options);
        setResponse(res);
      } catch (err) {
        const data = err.response ? err.response.data : "Server error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  // Return an array with response, error, isLoading and fetch function
  return [{ response, error, isLoading }, fetch];
};

// Export useFetch custom hook
export default useFetch;
