import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Montserrat } from "@next/font/google";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { FunctionComponent } from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

function Layout({ children, ...props }: LayoutProps): JSX.Element {
  return (
    <div className={cn(styles.wrapper, montserrat.className)} {...props}>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props:T):JSX.Element{
return(
  <Layout>
    <Component {...props}/>
  </Layout>
);
  };
};
