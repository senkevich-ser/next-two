import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";


export default function ReviewForm({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  return (
    <div className={cn(styles.reviewform, className)} {...props}>  
    <Input/>
    <Input className={styles.title}/>
    <div className={styles.rating}>
      <span>Оценка:</span>
      <Rating rating={2}/>
    </div>
    <Textarea className={styles.description}/>
    <div className={styles.submit}>
      <Button appearance="primary">Отправить</Button>
      <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
    </div>
    </div>
  );
}
