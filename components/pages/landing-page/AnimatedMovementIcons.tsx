import { Icon } from "@iconify/react";
import styles from "../../../css/page.module.css";
import useScrollIntoView from "@/hooks/useScrollIntoView";
const AnimatedMovementIcons = ({ icon, iconNumber }: any) => {
  const animationNumber = `vibrate-${iconNumber}`;
  return (
    <div
      className={`text-5xl font-black cursor-pointer ${styles[animationNumber]}`}
    >
      <Icon icon={icon} />
    </div>
  );
};

export default AnimatedMovementIcons;
