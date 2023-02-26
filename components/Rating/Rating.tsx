import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import StarIcon from "./star.svg";

export default function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(()=>{
    constractRating(rating);
  },[rating]);

  const constractRating = (currentRating: number) => {
    const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]:isEditable
          })}
          onMouseEnter={()=>changeDisplay(i+1)}
          onMouseLeave={()=>changeDisplay(rating)}
          onClick={()=>onClick(i+1)}
        />
      );
    });
    setRatingArray(updateRating);
  };

  const changeDisplay=(i:number)=>{
    if(!isEditable){
      return;
    } else{
      constractRating(i);
    }

  };

  const onClick=(i:number)=>{
    if(!isEditable||!setRating){
      return;
    } else{
      setRating(i);
    }

  };

  


  return <div {...props}>
    {ratingArray.map((r,i)=>(
      <span key={i}>{r}</span>
    ))}
  </div>;
}
