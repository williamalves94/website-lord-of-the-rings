import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollChangedRoute = () => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
