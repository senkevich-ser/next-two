import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import Head from "next/head";
import HTag from "@/components/HTag/HTag";
import Tag from "@/components/Tag/Tag";
import HhData from "@/components/HhData/HhData";


export default function TopPageComponent({firstCategory,page,products}:TopPageComponentProps):JSX.Element{
return(
    <div className={styles.wrapper}>
     <Head>
        <title>{page.title}</title>
      </Head>
      <div className={styles.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products &&<Tag color="grey" size="large">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
     <div className={styles.products}>
      {products&&products.map(p=><div key={p._id}>{p.title}</div>)}
     </div>
     <div className={styles.hhTitle}>
        <HTag tag='h2'>Вакансии - {page.category}</HTag>
        <Tag color="red" size='large'>hh.ru</Tag>
      </div>
      {page.hh && <HhData {...page.hh}/>}
    </div>
);
}