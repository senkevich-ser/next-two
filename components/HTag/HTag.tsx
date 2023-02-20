import { HTagProps } from "./HTag.props";
import styles from './HTag.module.css';
import cn from 'classnames';

export default function HTag({tag,children}:HTagProps):JSX.Element{
return(
    <>
    {tag=='h1'&&<h1 className={cn(styles.h,styles.h1)}>{children}</h1>}
    {tag=='h2'&&<h2 className={cn(styles.h,styles.h2)}>{children}</h2>}
    {tag=='h3'&&<h3 className={cn(styles.h,styles.h3)}>{children}</h3>}
    </>
);
}