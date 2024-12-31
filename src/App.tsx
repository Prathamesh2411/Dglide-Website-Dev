import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import CustomerStories from "./pages/CustomerStories";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-stories":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  const theme = {
    token: {
      colorPrimary: "#4096ff",
      borderRadius: 8,
      colorBgContainer: "#ffffff",
    },
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/customer-stories" element={<CustomerStories />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
export default App;
