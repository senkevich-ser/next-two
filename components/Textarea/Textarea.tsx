import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';
import { forwardRef,ForwardedRef } from "react";

export  const Textarea=forwardRef(({className,...props}:TextareaProps,ref:ForwardedRef<HTMLTextAreaElement>):JSX.Element=>{
return(
 <textarea className={cn(styles.textarea,className)} ref={ref}{...props}/>
);
});