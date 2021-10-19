import styles from "styles/modules/SecondaryButton.module.scss";

interface Props {
  text: string;
}

const SecondaryButton: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default SecondaryButton;
