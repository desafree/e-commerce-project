import { useEffect, useState } from "react";
import product from "../typescript/interface/product";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState<product[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data: response };
};

export default useFetch;
