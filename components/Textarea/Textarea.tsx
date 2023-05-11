import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { forwardRef, ForwardedRef } from "react";

export const Textarea = forwardRef(
  (
    { className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={styles.errorWrapper}>
        <textarea
          className={cn(
            styles.textarea,
            {
              [styles.error]: error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
