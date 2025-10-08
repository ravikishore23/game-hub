import { Badge, Text } from "@chakra-ui/react";

interface props {
  score: number;
}

function CriticScore({ score }: props) {
  let color = score > 85 ? "green.300" : score > 70 ? "yellow" : "";
  return (
    <Badge color={color} fontSize="12px" paddingX={2}>
      <Text color="gray" fontSize="1.2em">
        Score :
      </Text>{" "}
      {score}
    </Badge>
  );
}

export default CriticScore;
