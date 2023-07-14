import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardLayout({ children }: Props) {
  return (
    <Card boxShadow={"0 0 7px rgba(0,0,0,0.6)"} border={10} overflow={"hidden"}>
      {children}
    </Card>
  );
}
