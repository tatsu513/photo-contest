import styles from "styles/modules/SecondaryButton.module.scss";

interface Props {
  text: string;
  onClick?: () => void;
}

const SecondaryButton: React.VFC<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
