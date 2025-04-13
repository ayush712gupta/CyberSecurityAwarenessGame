import { useEffect } from "react";

const PT = () => {
  useEffect(() => {
    window.location.href = "https://password-strength-tester.blogspot.com/";
  }, []);

  return <p>Redirecting...</p>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default PT;
