import Navigation from "@Src/components/navigation";
import useChangeKey from "@Src/hooks/useChangeKey";
import { css, FCWC, LayoutAnimation } from "@stacklycore/ui";

const LayoutMain: FCWC = (props) => {
  const { children } = props;
  useChangeKey();
  return (
    <LayoutAnimation>
      <Navigation />
      {children}
    </LayoutAnimation>
  );
};

export default LayoutMain;
