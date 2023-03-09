import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import {  Inter } from "@next/font/google";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "@/context/app.context";

const montserrat = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

function Layout({ children, ...props }: LayoutProps): JSX.Element {
  return (
    <div className={cn(styles.wrapper, montserrat.className)} {...props}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.body}>
      {children}
      </div>
      <Footer className={styles.footer}/>
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props:T):JSX.Element{
return(
  <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
  <Layout>
    <Component {...props}/>
  </Layout>
  </AppContextProvider>
);
  };
};
