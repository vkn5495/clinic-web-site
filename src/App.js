import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Meet from "./pages/Meet/Meet";
import Contact from "./pages/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from "./pages/Service/Service";
import FooterTwo from "./components/FooterTwo/FooterTwo";
import { AppProvider } from "./Context/Context";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="meet" element={<Meet />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
        <FooterTwo />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
