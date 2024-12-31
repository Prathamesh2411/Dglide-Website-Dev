import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import CustomerStories from "./pages/CustomerStories";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";

// Define ErrorFallback component with proper TypeScript interface
interface ErrorFallbackProps {
  error: Error;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert" className="p-4">
      <h2 className="text-red-600 text-lg font-bold">Something went wrong:</h2>
      <pre className="mt-2 text-sm">{error.message}</pre>
    </div>
  );
}

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

    // Updated switch case to include all routes including solutions
    switch (pathname) {
      case "/":
        title = "Home | Digital Glide";
        metaDescription = "Welcome to Digital Glide";
        break;
      case "/solutions":
        title = "Solutions | Digital Glide";
        metaDescription = "Explore our solutions";
        break;
      case "/customer-stories":
        title = "Customer Stories | Digital Glide";
        metaDescription = "Read our customer success stories";
        break;
      case "/about-us":
        title = "About Us | Digital Glide";
        metaDescription = "Learn more about Digital Glide";
        break;
      case "/pricing":
        title = "Pricing | Digital Glide";
        metaDescription = "View our pricing plans";
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Home />
          </ErrorBoundary>
        }
      />
      <Route
        path="/solutions"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Solutions />
          </ErrorBoundary>
        }
      />
      <Route
        path="/customer-stories"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <CustomerStories />
          </ErrorBoundary>
        }
      />
      <Route
        path="/about-us"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AboutUs />
          </ErrorBoundary>
        }
      />
      <Route
        path="/pricing"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Pricing />
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default App;
