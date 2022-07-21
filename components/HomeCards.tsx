import { Box, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsHeart } from "react-icons/bs";

interface cardItem {
  id: String;
  discount: String;
  price: String;
  discountedPrice: String;
  image: any;
  title: String;
}
interface props {
  data: cardItem;
}

const HomeCard: React.FC<props> = (props) => {
  const { data } = props;

  return (
    <Box
      p="15px"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
      boxShadow="rgba(17, 17, 26, 0.1) 0px 0px 16px"
      height="100%"
      borderRadius="7px"
      pos="relative"
    >
      <Box
        bg="#ef4444"
        borderRadius="5px"
        as="span"
        color="white"
        fontSize="12px"
        p="5px"
        pos="absolute"
        left={15}
      >
        Hot
      </Box>
      <IconButton
        rounded="full"
        size="sm"
        icon={<BsHeart />}
        bg="gray.200"
        color="gray"
        _hover={{
          bg: "gray.300",
          color: "gray.500",
        }}
        pos="absolute"
        right={15}
        aria-label="wishlist"
      />
      <Box
        width="100%"
        height="150px"
        textAlign="center"
        pos="relative"
        _hover={{
          "&:hover + img": {
            scale: 1.2,
          },
        }}
      >
        <Image
          src={data?.image}
          objectFit="contain"
          objectPosition={"center"}
          height="100%"
          width="100%"
          priority={true}
        />
      </Box>
      <Box>{data?.title}</Box>
      <Box>{data?.price}</Box>
    </Box>
  );
};

export default HomeCard;
