import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export default function Paragraph({
  size = "medium",
  children,
  ...props
}: ParagraphProps): JSX.Element {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
