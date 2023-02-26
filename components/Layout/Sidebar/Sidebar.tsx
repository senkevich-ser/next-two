import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export default function Sidebar({
  ...props
}: SidebarProps): JSX.Element {
  return (
    <div
      className={cn(styles.sidebar)}
      {...props}
    >Sidebar
    </div>
  );
}
