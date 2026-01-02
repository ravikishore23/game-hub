import { Button, ListItem, ListRoot } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <>
      <ListRoot marginLeft={5} listStyle={"none"}>
        <ListItem marginTop={4}>
          <Button
            bg={"none"}
            borderRadius={10}
            fontSize={15}
            color={"white"}
            whiteSpace={"normal"}
            textAlign={"left"}
            objectFit={"cover"}
            width={"140px"}
            height={"40px"}
            backgroundColor={"#393E46"}
          ></Button>
        </ListItem>
      </ListRoot>
    </>
  );
}

export default GenreListSkeleton;
