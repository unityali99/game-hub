import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function CardPlaceholder() {
  return (
    <Card w={{ lg: "30vw" }} border={10} overflow={"hidden"}>
      <Skeleton h={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
