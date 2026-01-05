import { useEffect, useState } from "react";
import { getHealth } from "../api/health";

type HealthResponse = {
  status: string;
};

const HealthCheck = () => {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getHealth()
      .then(setData)
      .catch(() => setError("Failed to reach backend"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return <h2>Backend Status: {data.status}</h2>;
};

export default HealthCheck;
