import styles from "styles/modules/PrimaryButton.module.scss";

interface Props {
  text: string;
}

const PrimaryButton: React.VFC<Props> = ({ text }) => {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default PrimaryButton;
