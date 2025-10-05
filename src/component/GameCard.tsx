import type { Game } from "@/assets/Hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <Card.Root width={300} height={400}>
      <Card.Body>
        <Image src={game.image_background} alt="404" />
      </Card.Body>
      <Card.Footer>
        <Heading>{game.name}</Heading>
      </Card.Footer>
    </Card.Root>
  );
}

export default GameCard;
