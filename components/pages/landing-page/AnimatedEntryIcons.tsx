import { Icon } from "@iconify/react";
import styles from "../../../css/page.module.css";
import useScrollIntoView from "@/hooks/useScrollIntoView";
const AnimatedEntryIcons = ({ icon, showElement, entryDirection }: any) => {
  return (
    <div
      className={`text-9xl font-black ${styles["color-p"]} ${
        styles[entryDirection]
      }  ${styles["scroll-to-view-initial"]} ${
        showElement ? styles["scroll-to-view"] : ""
      }`}
    >
      <Icon icon={icon} />
    </div>
  );
};

export default AnimatedEntryIcons;
