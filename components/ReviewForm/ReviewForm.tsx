import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import CloseIcon from './close.svg';


export default function ReviewForm({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  return (
    <>
    <div className={cn(styles.reviewform, className)} {...props}>  
    <Input placeholder="Имя"/>
    <Input className={styles.title} placeholder="Заголовок отзыва"/>
    <div className={styles.rating}>
      <span>Оценка:</span>
      <Rating rating={2}/>
    </div>
    <Textarea className={styles.description} placeholder="Текст отзыва"/>
    <div className={styles.submit}>
      <Button appearance="primary">Отправить</Button>
      <span className={styles.disclamer}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
    </div>
    </div>
    <div className={styles.success}>
    <div className={styles.successtitle}>Ваш отзыв отправлен</div>
    <div className={styles.successinfo}>Спасибо, Ваш отзыв будет опубликован после проверки.</div>
      <CloseIcon className={styles.successicon}/>
    </div>
    </>
  );
}
