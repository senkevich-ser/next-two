import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export default function Tag({size='small',color='ghost',children,...props}:TagProps):JSX.Element{
return(
  <div className={cn(styles.tag,{
    [styles.small]:size=='small',
    [styles.large]:size=='large',
    [styles.grey]:color=='grey',
    [styles.red]:color=='red',
    [styles.ghost]:color=='ghost',
    [styles.primary]:color=='primary',
  })}{...props}>{children}</div>
);
}