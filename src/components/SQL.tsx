import { useEffect } from "react";

const SQL= () => {
  useEffect(() => {
    window.location.href = "https://sql-injection-simulator.blogspot.com/";
  }, []);

  return <p>Redirecting...</p>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default SQL;
