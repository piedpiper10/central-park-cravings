import { useEffect, useState } from "react";

const useOnlieStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("oneline", () => {
      setOnlineStatus(false);
    });
  }, []);

  //boolean value
};

export default useOnlieStatus;
