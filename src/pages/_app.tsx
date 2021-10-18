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

interface InitialData {
  windowWidth: number;
  circleWidth: number;
  setContext: Dispatch<
    SetStateAction<{
      windowWidth: number;
      circleWidth: number;
    }>
  >;
}

export const ContextData = createContext<InitialData>(
  {} as InitialData
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [context, setContext] = useState({
    windowWidth: 0,
    circleWidth: 0,
  });
  useEffect(() => {
    const onResize = () => {
      setContext(() => ({
        windowWidth: window.innerWidth,
        circleWidth: window.innerWidth / 6,
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  useEffect(() => {
    const width = window.innerWidth;
    setContext({ windowWidth: width, circleWidth: width / 6 });
  }, []);
  return (
    <ContextData.Provider value={{ ...context, setContext }}>
      <main>
        <Component {...pageProps} />
      </main>
    </ContextData.Provider>
  );
};

export default MyApp;
