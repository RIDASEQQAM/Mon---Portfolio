import { TechCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  // Map constants to the shape expected by TechCanvas
  const techs = TECHNOLOGIES.map((t) => ({ name: t.name, icon: t.icon }));

  return (
    <SectionWrapper>
      <TechCanvas techs={techs} columns={5} />
    </SectionWrapper>
  );
};
