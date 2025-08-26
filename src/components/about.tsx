import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "../i18n";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
        transition: true,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img 
            src={icon} 
            alt={title} 
            className="w-16 h-16 object-contain" 
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Memoized ServiceCard list component
const ServiceList = ({ services }: { services: typeof SERVICES }) => {
  return (
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, i) => (
        <ServiceCard key={service.title} index={i} {...service} />
      ))}
    </div>
  );
};

// About
export const About = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>{t("about_sub")}</p>
          <h2 className={styles.sectionHeadText}>{t("about_title")}</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("about_text")}
        </motion.p>

        {/* Service Cards */}
        <ServiceList services={SERVICES} />
      </>
    </SectionWrapper>
  );
};
