import Head from "next/head";
import { withLayout } from "@/components/Layout/Layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { MenuItem } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenu } from "@/helpers/helpers";
import { API } from "@/helpers/api";

function Type({title}:TypeProps) {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
     <h1>Super {title}</h1>
    </>
  );
}
export default withLayout(Type);

export const getStaticPaths:GetStaticPaths=async ()=>{

  return{
    paths:firstLevelMenu.map(m=>'/'+m.route),
    fallback:true
  };
};
export const getStaticProps: GetStaticProps<TypeProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
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
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    {
      firstCategory:firstLevelMenuItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory:firstLevelMenuItem.id,
      title:firstLevelMenu[firstLevelMenuItem.id].name
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  title:string;
}
