import type { AppProps } from "next/app";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Agrega la clase de transición al cuerpo de la página cuando se monta el componente
    document.body.classList.add("scroll-transition");
    return () => {
      // Remueve la clase de transición cuando se desmonta el componente
      document.body.classList.remove("scroll-transition");
    };
  }, []);

  return <Component {...pageProps} />;
}
