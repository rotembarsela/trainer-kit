import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
