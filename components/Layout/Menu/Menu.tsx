import styles from "./Menu.module.css";
import cn from "classnames";
import {format} from 'date-fns';
import { AppContext } from "@/context/app.context";
import { useContext } from "react";

export default function Footer(): JSX.Element {
  const{menu,firstCategory,setMenu}=useContext(AppContext);
  return (
    <ul>
        {menu && menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
  );
}
