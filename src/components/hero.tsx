import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { useTranslation } from "../i18n";

// Hero
export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className={cn(styles.paddingX, "max-w-7xl w-full")}>
        <div className="flex flex-col items-center text-center">
          {/* Decorative element */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-5 h-5 rounded-full bg-[#7249ca]" />
            <div className="w-1 h-40 violet-gradient mt-2" />
          </div>

          {/* Main Text */}
          <div className="relative z-10">
            <h1 className={cn(styles.heroHeadText, "text-white")}>
              {t("hero_greeting")} <span className="text-[#915eff]">Rida</span>
            </h1>
            <p className={cn(styles.heroSubText, "mt-4 text-white-100")}>
              {t("hero_title")}
            </p>
            {/* LinkedIn Follow Button under title */}
            <div className="mt-4 flex justify-center">
              <style>
                {`.libutton { display: flex; flex-direction: column; justify-content: center; padding: 7px; text-align: center; outline: none; text-decoration: none !important; color: #ffffff !important; width: 200px; height: 32px; border-radius: 16px; background-color: #915eff; font-family: "SF Pro Text", Helvetica, sans-serif; }`}
              </style>
              <a
                className="libutton"
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=rida-seqqam"
                target="_blank"
                rel="noreferrer noopener"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" title="Aller à la section À propos" aria-label="Défiler vers la section À propos">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
