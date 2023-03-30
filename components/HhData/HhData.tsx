import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import RateIcon from "./rate.svg";
import { priceRu } from "@/helpers/helpers";

export default function HhData({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
  updatedAt,
  ...props
}: HhDataProps): JSX.Element {
  return (
    <div className={cn(styles.hh, {})} {...props}>
      <Card className={styles.vacansies}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.vacansiesValue}>{count}</div>
      </Card>
      <Card className={styles.salaries}>
        <div className={styles.salariesCard}>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rateSalary}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={styles.salariesCard}>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rateSalary}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled}/>
            <RateIcon />
          </div>
        </div>
        <div className={styles.salariesCard}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rateSalary}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
          </div>
        </div>
      </Card>
    </div>
  );
}
