import useGenres, { type Genre } from "@/assets/Hooks/useGenres";
import getCroppedImageUrl from "@/Services/image-url";
import {
  Button,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectedGenre }: props) {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}

      <ListRoot marginTop="25px">
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} padding={3}>
              <Button
                bg={"none"}
                borderRadius={10}
                onClick={() => onSelectedGenre(genre)}
                fontSize={15}
                color={"white"}
                fontWeight={
                  genre.id === selectedGenre?.id ? "bolder" : "normal"
                }
              >
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={10}
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  {genre.name}
                </HStack>
              </Button>
            </ListItem>
          );
        })}
      </ListRoot>
    </>
  );
}

export default GenreList;
