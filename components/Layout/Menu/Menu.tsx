import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";


export default function Menu(): JSX.Element {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const router = useRouter();

  const openSecondLevel=(secondCategory:string)=>{
    setMenu && setMenu(menu.map(m=>{
      if(m._id.secondCategory==secondCategory){
        m.isOpen=!m.isOpen;
      }
      return m;
    }));
  };

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

  const buildSecondLevel = (menuItem:FirstLevelMenuItem ) => {
    return <div className={styles.secondblock}>
    {menu.map(m=>{

      if(m.pages.map(p=>p.alias).includes(router.asPath.split('/')[2])){
        m.isOpen=!m.isOpen;
      }
      return(
      <div key={m._id.secondCategory}>
        <div className={styles.secondlevel} onClick={()=>openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
        <div className={cn(styles.secondlevelblock,{
          [styles.secondlevelblockopened]:m.isOpen
        })}>
          {buildThirdLevel(m.pages,menuItem.route)}
        </div>
      </div>
  );}
  )}
    </div>;
  };

  const buildThirdLevel = (pages:PageItem[],route:string) => {
    return <>
    {pages.map(p=>(
      <a key={p._id} href={`/${route}/${p.alias}`} className={cn(styles.thirdlevel,{
        [styles.thirdlevelactive]:`/${route}/${p.alias}`==router.asPath
      })}>
        {p.title}
      </a>
    ))}
    </>;
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
