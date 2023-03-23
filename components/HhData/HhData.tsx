import { HhDataProps } from "./HhData.props";
import styles from './HhData.module.css';
import cn from 'classnames';
import Card from "../Card/Card";

export default function HhData({count,...props}:HhDataProps):JSX.Element{
return(
  <div className={cn(styles.hh,{
   
  })}{...props}>
<Card color="white" className={styles.vacansiesCard}>
  <div className={styles.title}>Всего вакансий</div>
  <div className={styles.vacansiesValue}>{count}</div>
</Card>
  </div>
);
}