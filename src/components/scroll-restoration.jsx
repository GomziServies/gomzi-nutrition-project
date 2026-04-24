import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousPathname.current = location.pathname;
      return;
    }

    const isHashOnlyNavigation =
      previousPathname.current === location.pathname && !!location.hash;

    previousPathname.current = location.pathname;

    if (isHashOnlyNavigation) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);
}

export default App;
