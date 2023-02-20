import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>,HTMLHeadElement> {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
