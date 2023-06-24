import styles from "./LightBanner.module.scss";

export const LightBanner = ({ text }: { text: string }): JSX.Element => {
  return <p className={styles.text}>{text}</p>;
};
