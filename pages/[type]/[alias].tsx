import Head from "next/head";

import { withLayout } from "@/components/Layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { MenuItem } from "../../interfaces/menu.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { TopPageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";

const firstCategory = 0;

function Course({ menu,page,products}: CourseProps) {
  
  return (
    <>
      <Head>
        <title>Aliases</title>
      </Head>
     <ul>
      {products&&products.map(p=><span key={p._id}>{p.title}</span>)}
     </ul>
    </>
  );
}
export default withLayout(Course);

export const getStaticPaths:GetStaticPaths=async ()=>{
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return{
    paths:menu.flatMap(m=>m.pages.map(p=>'/courses/'+p.alias)),
    fallback:true
  };
};

export const getStaticProps: GetStaticProps = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return{
      notFound:true
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  const { data: page } = await axios.get<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/"+ params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
    {
      category:page.category,
      limit:10
    }
  );
  


  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page:TopPageModel;
  products:ProductModel[];
}
