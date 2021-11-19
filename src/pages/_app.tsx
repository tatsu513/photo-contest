import type { AppProps } from "next/app";
import "styles/reset.scss";
import "styles/style.scss";
import "styles/common.scss";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Auth from "@/components/Auth";
interface InitialData {
  windowWidth: number;
  setCtx: Dispatch<
    SetStateAction<{
      windowWidth: number;
    }>
  >;
}

export const ContextData = createContext<InitialData>(
  {} as InitialData
);

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const [ctx, setCtx] = useState({
    windowWidth: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setCtx(() => ({
        windowWidth: window.innerWidth,
      }));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ContextData.Provider value={{ ...ctx, setCtx }}>
      <main>
        <Component {...pageProps} />
      </main>
    </ContextData.Provider>
  );
};

export default MyApp;
