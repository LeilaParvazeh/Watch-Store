import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/pages/store";
import { useEffect } from "react";
import CartIcon from "./Components/cart/CartIcon";
import { setTheme } from "./store/themeSlice";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, [dispatch]);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  return <>{children}</>;
}



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Component {...pageProps} />
        <CartIcon />
      </ThemeWrapper>
    </Provider>
  )
}
