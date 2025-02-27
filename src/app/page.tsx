"use client"
import { useState, useEffect } from "react";
import Main from "@/pages/Main";
import Header from "@/components/Header";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Assuming 768px as the desktop breakpoint
    };

    // Check screen size on component mount
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} />
      <Main />
    </>
  );
}
