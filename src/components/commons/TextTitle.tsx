import styles from "styles/modules/TextTitle.module.scss";

interface Props {
  text: string;
}

const TextTitle: React.VFC<Props> = ({ text }) => {
  return (
    <section className={styles.titleBox}>
      <h1 className={styles.titleText}>{text}</h1>
    </section>
  );
};

export default TextTitle;
