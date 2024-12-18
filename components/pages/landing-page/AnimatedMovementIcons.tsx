import { Icon } from "@iconify/react";
import styles from "../../../css/page.module.css";
import useScrollIntoView from "@/hooks/useScrollIntoView";
const AnimatedMovementIcons = ({ icon, iconNumber, redirectLink }: any) => {
  const animationNumber = `vibrate-${iconNumber}`;
  return (
    <div
      className={`text-5xl sm:text-7xl font-black cursor-pointer ${styles[animationNumber]} ${styles["scale"]}`}
    >
      <a target="blank" href={redirectLink}>
        <Icon icon={icon} />
      </a>
    </div>
  );
};

export default AnimatedMovementIcons;
