import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

function CriticScore({ score }: props) {
  let color = score > 75 ? "green.400" : score > 60 ? "yellow" : "";
  return (
    <Badge color={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
}

export default CriticScore;
