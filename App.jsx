import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { colors, css } from "./styles/theme";

export default function App() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const pages = {
    Home: Home,
    "How It Works": HowItWorks,
    Services: Services,
    Contact: Contact,
  };

  const Page = pages[page];

  return (
    <>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />
      <Page setPage={setPage} />
      <Footer setPage={setPage} />
    </>
  );
}
