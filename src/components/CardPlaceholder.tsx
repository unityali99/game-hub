import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardLayout from "./CardLayout";

export default function CardPlaceholder() {
  return (
    <CardLayout>
      <Skeleton h={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardLayout>
  );
}
