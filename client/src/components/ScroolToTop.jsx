import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScroolToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, [location.pathname]);
  };

export default ScroolToTop