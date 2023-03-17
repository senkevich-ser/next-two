import Head from "next/head";
import { withLayout } from "@/components/Layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

function Search() {

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
     <h1>Super Search</h1>
    </>
  );
}
export default withLayout(Search);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
