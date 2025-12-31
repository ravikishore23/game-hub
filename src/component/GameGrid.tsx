import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/assets/Hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "@/App";

interface props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: props) {
  const { Data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <text> {error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={2}
        overflow="hidden"
        border={10}
        padding="16px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {Data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
