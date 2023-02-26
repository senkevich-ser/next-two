import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";

export default function Header({
  ...props
}: HeaderProps): JSX.Element {
  return (
    <header
      className={cn(styles.header)}
      {...props}
    >Header
    </header>
  );
}
