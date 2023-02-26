import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export default function Footer({
  ...props
}: FooterProps): JSX.Element {
  return (
    <footer
      className={cn(styles.footer)}
      {...props}
    >Footer
    </footer>
  );
}
