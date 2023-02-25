import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useState } from "react";

export default function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  

  return <div className={cn(styles.rating, {})} {...props}></div>;
}
