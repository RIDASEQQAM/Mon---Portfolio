import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { preview } from "../assets";
import { CERTIFICATIONS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type CertificationCardProps = (typeof CERTIFICATIONS)[number] & {
  index: number;
};

// Certification Card
const CertificationCard = ({
  index,
  name,
  description,
  tags,
  image,
  certificate_link,
  issuer,
  date,
}: CertificationCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/9]">
        {/* Certificate image */}
  <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

        {/* Certificate Link */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(certificate_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="View Certificate"
              title="View Certificate"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Certificate Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] italic">
          {issuer} • {date}
        </p>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Certificate Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Certifications
export const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Les certifications suivantes démontrent mon engagement continu envers l'apprentissage et le développement professionnel. Chaque certification représente une expertise validée dans un domaine spécifique de l'informatique et du développement.
          </motion.p>
        </div>

        {/* Certification Cards */}
        <div className="mt-20 flex flex-wrap gap-7">
          {CERTIFICATIONS.map((certification, i) => (
            <CertificationCard key={`certification-${i}`} index={i} {...certification} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
