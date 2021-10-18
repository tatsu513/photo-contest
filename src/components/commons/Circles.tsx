import { ContextData } from "pages/_app";
import { useContext } from "react";
import styles from "styles/modules/Circles.module.scss";

interface Props {
  color: string;
}

const Circles: React.VFC<Props> = ({ color }) => {
  const ctx = useContext(ContextData);
  return (
    <ul className={styles.circleBox}>
      {[...Array(6)].map((_, i) => (
        <li
          key={i}
          className={styles.circle}
          style={{
            backgroundColor: color,
            height: ctx.circleWidth,
            width: ctx.circleWidth,
          }}
        />
      ))}
    </ul>
  );
};

export default Circles;
