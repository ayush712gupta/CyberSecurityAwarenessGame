import { useEffect } from "react";

const MITM = () => {
  useEffect(() => {
    window.location.href = "https://man-in-the-middle-attack712.blogspot.com/";
  }, []);

  return <p>Redirecting...</p>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default MITM;
