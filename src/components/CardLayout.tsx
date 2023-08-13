import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function CardLayout({ children, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      transition={"ease 0.2s"}
      _hover={{ transform: "scale(1.02)" }}
      boxShadow={"0 0 7px rgba(0,0,0,0.6)"}
      border={10}
      overflow={"hidden"}
      cursor={"pointer"}
    >
      {children}
    </Card>
  );
}
