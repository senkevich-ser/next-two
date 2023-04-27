import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import Image from "next/image";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { decOfNumber, priceRu } from "@/helpers/helpers";
import { useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function Product({
  product,
  className,
  ...props
}: ProductProps): JSX.Element {

  const[isReviewOpened,setIsReviewOpened]=useState(false);
  return (
    <>
      <Card className={cn(styles.product, className)}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.priceblock}>
          <div className={styles.price}>{priceRu(product.price)}</div>
          {product.oldPrice && (
            <Tag className={styles.oldprice} color="green">
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)} /{" "}
          <span className={styles.month}> в мес</span>
        </div>
        <div className={styles.rate}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        {
          <div className={styles.tags}>
            {product.categories.map((c) => (
              <Tag key={c} color="primary">
                {c}
              </Tag>
            ))}
          </div>
        }
        <div className={styles.pricetitle}>цена</div>
        <div className={styles.credittitle}>в кредит</div>
        <div className={styles.ratetitle}>
          {product.reviewCount}{" "}
          {decOfNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
        </div>
        {<Divider className={styles.hr} />}
        {<div className={styles.description}>{product.description}</div>}
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div key={c.value} className={styles.featureitem}>
              <div className={styles.featuretitle}>{c.name}</div>
              <div className={styles.featuredotes}></div>
              <div className={styles.featurevalue}>{c.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.advblock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advantagestitle}>Преимущества</div>
              <div className={styles.advantagestext}>{product.advantages}</div>
            </div>
          )}
          {product.advantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advantagestitle}>Недостатки</div>
              <div className={styles.advantagestext}>{product.advantages}</div>
            </div>
          )}
        </div>
        {<Divider className={cn(styles.hr, styles.hr2)} />}
        {
          <div className={styles.actions}>
            <Button appearance="primary">Узнать подробнее</Button>
            <Button
              appearance="ghost"
              arrow={isReviewOpened?"down":"right"}
              className={styles.reviewbutton}
              onClick={()=>setIsReviewOpened(!isReviewOpened)}
            >
              Читать отзывы
            </Button>
          </div>
        }
      </Card>
      <Card
        color="blue"
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.close]: !isReviewOpened,
        })}
      >
        {product.reviews && product.reviews.map((r)=><>
        <Review review={r}/>
        <Divider className={cn(styles.hr, styles.hr2)} />
        </>)}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
}
