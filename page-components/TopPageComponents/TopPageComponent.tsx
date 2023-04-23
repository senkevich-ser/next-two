import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import Head from "next/head";
import HTag from "@/components/HTag/HTag";
import Tag from "@/components/Tag/Tag";
import HhData from "@/components/HhData/HhData";
import Advantages from "@/components/Advantages/Advantages";
import Sort from "@/components/Sort/Sort";
import { SortEnum } from "@/components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import Product from "@/components/Product/Product";
import { TopLevelCategory } from "@/interfaces/page.interface";


export default function TopPageComponent({firstCategory,page,products}:TopPageComponentProps):JSX.Element{

  const[{products:sortedProducts,sort},dispathSort]=useReducer(sortReducer,{products,sort:SortEnum.Rating});

  const setSort=(sort:SortEnum)=>{
    dispathSort({type:sort});
  };
return(
    <div className={styles.wrapper}>
     <Head>
        <title>{page.title}</title>
      </Head>
      <div className={styles.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products &&<Tag color="grey" size="large">{products.length}</Tag>}
      <Sort sort={sort} setSort={setSort}/>
      </div>
     <div className={styles.products}>
      {sortedProducts&&sortedProducts.map(p=><Product product={p} key={p._id}/>)}
     </div>
     <div className={styles.hhTitle}>
        <HTag tag='h2'>Вакансии - {page.category}</HTag>
        <Tag color="red" size='large'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && page.hh && <HhData {...page.hh}/>}
      <HTag tag='h2'>Преимущества</HTag>
      {page.advantages &&<Advantages advantages={page.advantages}/>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page.seoText}}></div>}
      <HTag tag='h2'>Получаемые навыки</HTag>
      {page.tags && page.tags.map(t=>(<Tag color="primary" key={t}>{t}</Tag>))}
    </div>
);
}