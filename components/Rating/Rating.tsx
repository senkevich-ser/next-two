import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Rating=forwardRef(({
  isEditable = false,
  rating,
  setRating,
  error,
  ...props
}: RatingProps,ref:ForwardedRef<HTMLDivElement>): JSX.Element =>{
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

  


  return <div className={cn(styles.errorWrapper,{
    [styles.error]:error
  })} ref={ref}{...props}>
    {ratingArray.map((r,i)=>(
      <span key={i}>{r}</span>
    ))}
    {error&&<span className={styles.errorMessage}>{error.message}</span>}
  </div>;
});
