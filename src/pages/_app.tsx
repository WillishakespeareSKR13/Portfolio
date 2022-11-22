import type { AppProps } from "next/app";
import { FC } from "react";
import { ContextNormalize } from "@stacklycore/ui";
import LayoutMain from "@Src/layouts/main";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextNormalize>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ContextNormalize>
  );
};

export default App;
