import { useEffect } from "react";

const XSS = () => {
  useEffect(() => {
    window.location.href = "https://cross-site-scripting712.blogspot.com/";
  }, []);

  return <p>Redirecting...</p>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default XSS;
