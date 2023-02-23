import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  size?:'small'|'large';
  color?:'grey'|'red'|'ghost'|'primary';
  children:ReactNode;
}