import { withLayout } from "@/components/Layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { MenuItem } from "../../interfaces/menu.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenu } from "@/helpers/helpers";
import TopPageComponent from "@/page-components/TopPageComponents/TopPageComponent";
import { API } from "@/helpers/api";



function TopPage({firstCategory,page,products}: TopPageProps) {
  
  return (
    <>
    {page &&  <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>}
    </>
  );
}
export default withLayout(TopPage);

export const getStaticPaths:GetStaticPaths=async ()=>{
  let paths:string[]=[];
  for (const m of firstLevelMenu){
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      {
        firstCategory:m.id,
      }
    );
    paths=paths.concat(menu.flatMap(s=>s.pages.map(p=>`/${m.route}/${p.alias}`)));
  }

  return{
    paths,
    fallback:true
  };
};

export const getStaticProps: GetStaticProps = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return{
      notFound:true
    };
  }
  const firstLevelMenuItem=firstLevelMenu.find(m=>m.route==params.type);

  if(!firstLevelMenuItem){
    return{
      notFound:true
    };
  }
try{
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    {
      firstCategory:firstLevelMenuItem.id,
    }
  );

  if(menu.length==0){
    return{
      notFound:true
    };
  }
  const { data: page } = await axios.get<TopPageModel>(
    API.topPage.byAlias+ params.alias
  );
  const { data: products } = await axios.post<ProductModel[]>(
    API.product.find,
    {
      category:page.category,
      limit:10
    }
  );
  
  return {
    props: {
      menu,
      firstCategory:firstLevelMenuItem.id,
      page,
      products
    },
  };
} catch{
  return{
    notFound:true
  };
}
  
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page:TopPageModel;
  products:ProductModel[];
  title:string;
}
