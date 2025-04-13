import { useEffect } from "react";

const PhishingSimulator = () => {
  useEffect(() => {
    window.location.href = "https://fuhadkalathingal.github.io/PhishGuard/level_1/level_1.html";
  }, []);

  return <p>Redirecting...</p>;
};

export default PhishingSimulator;
