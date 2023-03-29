import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";

export default function Advantages({
  advantages,
}: AdvantagesProps): JSX.Element {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <p className={styles.description}>{a.description}</p>
        </div>
      ))}
    </>
  );
}
