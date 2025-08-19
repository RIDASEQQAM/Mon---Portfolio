import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((technology, index) => (
          <div 
            className="w-28 h-28" 
            key={technology.name}
            style={{
              // Delay the visibility of each tech to prevent too many WebGL contexts at once
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
