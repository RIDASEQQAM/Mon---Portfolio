import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { preview } from "../assets";
import { CERTIFICATIONS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { useTranslation } from "../i18n";
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
}: CertificationCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
  <div className="relative w-full h-[230px]">
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

        {/* Certificate Info (responsive sizes for mobile) */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px] italic">
            {issuer} • {t(date)}
          </p>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{t(description)}</p>
        </div>

        {/* Certificate Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[12px] sm:text-[14px]")}>
              #{t(tag.name)}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Certifications
export const Certifications = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper idName="certifications">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("certifications_sub")}</p>
          <h2 className={styles.sectionHeadText}>{t("certifications_title")}</h2>
        </motion.div>

        {/* Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {t("certifications_desc")}
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
