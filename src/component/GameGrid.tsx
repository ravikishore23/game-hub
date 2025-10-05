import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/assets/Hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <text> {error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap={6}
        overflow={"hidden"}
        border={9}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
