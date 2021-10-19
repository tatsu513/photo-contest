import type { AppProps } from "next/app";
import "styles/reset.scss";
import "styles/style.scss";
import "styles/common.scss";
import {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Auth from "@/components/Auth";

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
  const user = "user";
  const pw = "password";
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  useLayoutEffect(() => {
    const hasAdminFlag = localStorage.getItem("isAdmin");
    if (hasAdminFlag === "true") {
      setIsAdmin(true);
    }
  }, []);
  const inputValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.target.name === "username"
        ? setUsername(event.target.value)
        : setPassword(event.target.value);
    },
    []
  );
  const checkUser = useCallback(() => {
    if (username === user && password === pw) {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      setUsername("");
      setPassword("");
    }
  }, [username, password]);
  return (
    <ContextData.Provider value={{ ...context, setContext }}>
      <main>
        {isAdmin ? (
          <Component {...pageProps} />
        ) : (
          <Auth
            username={username}
            password={password}
            onChange={inputValue}
            onSubmit={checkUser}
          />
        )}
      </main>
    </ContextData.Provider>
  );
};

export default MyApp;
