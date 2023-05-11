import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import {Rating} from "../Rating/Rating";
import Button from "../Button/Button";
import CloseIcon from "./close.svg";
import { IReviewForm } from "./ReviewForm.interface";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";

export default function ReviewForm({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  const { register, control, handleSubmit , formState:{errors}} = useForm<IReviewForm>();
  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewform, className)} {...props}>
        <Input
          {...register("name",{required:{value:true,message:"Укажите имя"}})}
          placeholder="Имя"
          className={styles.input}
          error={errors.name}
        />
        <Input
          {...register("title",{required:{value:true,message:"Укажите название"}})}
          className={cn(styles.title, styles.input)}
          placeholder="Заголовок отзыва"
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required:{value:true,message:"Укажите рейтинг"}}}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description",{required:{value:true,message:"Укажите текст"}})}
          className={cn(styles.description, styles.textarea)}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.disclamer}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successtitle}>Ваш отзыв отправлен</div>
        <div className={styles.successinfo}>
          Спасибо, Ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.successicon} />
      </div>
    </form>
  );
}
