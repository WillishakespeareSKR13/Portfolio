import Navigation from "@Src/components/navigation";
import { FCWC, LayoutAnimation } from "@stacklycore/ui";

const LayoutMain: FCWC = (props) => {
  const { children } = props;
  return (
    <LayoutAnimation>
      <Navigation />
      {children}
    </LayoutAnimation>
  );
};

export default LayoutMain;
