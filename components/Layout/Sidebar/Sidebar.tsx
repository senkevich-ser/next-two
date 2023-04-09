import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Menu from "../Menu/Menu";
import Logo from '../logo.svg';
import Link from "next/link";
import Search from "@/components/Search/Search";

export default function Sidebar({
  className,...props
}: SidebarProps): JSX.Element {
  return (
    <div
      className={cn(className,styles.sidebar)}
      {...props}
    ><Link href={'/'}>
      <Logo className={styles.logo}/>
      </Link>
      <Search/>
      <Menu/>
    </div>
  );
}
