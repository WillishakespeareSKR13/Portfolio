import type { AppProps } from "next/app";
import GlobalStyles from "@Styles/globalStyled";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
