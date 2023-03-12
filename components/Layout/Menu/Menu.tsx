import styles from "./Menu.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { AppContext } from "@/context/app.context";
import { useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export default function Menu(): JSX.Element {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((mItem) => (
          <div key={mItem.route}>
            <a href={`/${mItem.route}`}>
              <div
                className={cn(styles.firstlevel, {
                  [styles.firstlevelactive]: mItem.id == firstCategory,
                })}
              >
                {mItem.icon}
                <span>{mItem.name}</span>
              </div>
            </a>
            {mItem.id == firstCategory && buildSecondLevel(mItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem:buildSecondLevel ) => {
    return <>
    {menu.map(m=>(
      <div key={m._id.secondCategory}>
        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
        <div className={cn(styles.secondLevelBlock,{
          [styles.secondLevelBlockOpened]:m.isOpen
        })}>
          {buildThirdLevel(m.pages,menuItem.route)}
        </div>
      </div>
    ))}
    </>;
  };

  const buildThirdLevel = (pages:PageItem[],route:string) => {
    return <>
    {pages.map(p=>(
      <a key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel,{
        [styles.thirdLevelActive]:true
      })}>
        {p.title}
      </a>
    ))}
    </>;
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
