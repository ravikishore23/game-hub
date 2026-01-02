import useGenres, { type Genre } from "@/assets/Hooks/useGenres";
import getCroppedImageUrl from "@/Services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Text,
} from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectedGenre }: props) {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <Heading marginLeft={8} marginTop={5} fontSize={25}>
        Genres
      </Heading>
      <ListRoot>
        {isLoading && skeleton.map(() => <GenreListSkeleton />)}
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} padding={3}>
              <Button
                bg={"none"}
                borderRadius={10}
                onClick={() => onSelectedGenre(genre)}
                fontSize={15}
                color={"white"}
                whiteSpace={"normal"}
                textAlign={"left"}
                objectFit={"cover"}
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
