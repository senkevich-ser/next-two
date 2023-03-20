import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import Head from "next/head";


export default function TopPageComponent({firstCategory,page,products,title}:TopPageComponentProps):JSX.Element{
return(
    <>
     <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
     <ul>
      {products&&products.map(p=><li key={p._id}>{p.title}</li>)}
     </ul>
    </>
);
}