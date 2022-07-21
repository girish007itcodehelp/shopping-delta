import { Box, GridItem, Grid } from "@chakra-ui/react";
import React, { Key } from "react";
import HomeCard from "./HomeCards";

interface cardItem {
  id: String;
  discount: String;
  price: String;
  discountedPrice: String;
  image: string;
  title: String;
}

type Props = {
  data: cardItem[];
};

const MultCards: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <Box py="15px">
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="15px"
      >
        {data?.slice(0, 10)?.map((item: any, i: Key) => (
          <GridItem key={i} width="100%" borderRadius="2xl">
            <HomeCard data={item} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MultCards;
