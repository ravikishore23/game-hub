import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root width={330} borderRadius={10} height={360}>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
