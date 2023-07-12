import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function ScoreBadge({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge fontSize={17} px={2} colorScheme={color} borderRadius={"15%"}>
      {score}
    </Badge>
  );
}
