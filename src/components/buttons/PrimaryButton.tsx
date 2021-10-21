import styles from "styles/modules/PrimaryButton.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.VFC<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
