import styles from "styles/modules/Essentials.module.scss";

interface Props {
  text: string;
}

const Essentials: React.VFC<Props> = ({ text }) => {
  return (
    <>
      <h2 className={styles.title}>{text}</h2>
    </>
  );
};

export default Essentials;
