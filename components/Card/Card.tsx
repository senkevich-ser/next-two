import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";

export default function Tag({
  color = "white",
  children,
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(styles.card, {
        [styles.blue]: color == "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
}
