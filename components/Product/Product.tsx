import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import Image from "next/image";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";

export default function Product({
  product,
  className,
  ...props
}: ProductProps): JSX.Element {
  return (
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
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
      <div className={styles.tags}>{product.categories.map((c)=><Tag key={c} color="primary">{c}</Tag>)}</div>
      <div className={styles.pricetitle}>цена</div>
      <div className={styles.credittitle}>в кредит</div>
      <div className={styles.ratetitle}>{product.reviewCount} отзывов</div>
    </Card>
  );
}
