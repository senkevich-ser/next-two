import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import Head from "next/head";
import HTag from "@/components/HTag/HTag";
import Tag from "@/components/Tag/Tag";
import HhData from "@/components/HhData/HhData";
import Advantages from "@/components/Advantages/Advantages";
import Paragraph from "@/components/Paragraph/Paragraph";


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
      {page.hh && page.hh && <HhData {...page.hh}/>}
      <HTag tag='h2'>Преимущества</HTag>
      {page.advantages &&<Advantages advantages={page.advantages}/>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page.seoText}}></div>}
      <HTag tag='h2'>Получаемые навыки</HTag>
      {page.tags && page.tags.map(t=>(<Tag color="primary" key={t}>{t}</Tag>))}
    </div>
);
}