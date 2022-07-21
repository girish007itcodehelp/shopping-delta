import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import CButton from "./Button";
import { BsArrowRightShort } from "react-icons/bs";

interface addData {
  img: string;
  advText: string;
  link: string;
}

type Props = {
  data: addData;
};

const AdvHome: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <Box
      height="500px"
      width="300px"
      pos="relative"
      my="15px"
      borderRadius="11px"
      overflow="hidden"
    >
      <Box height="100%" width="100%" pos="relative">
        <Image src={data.img} layout="fill" objectFit="cover" />
      </Box>
      <Box
        pos="absolute"
        top="0"
        left="0"
        p="15px"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column" alignItems="center" gap="45px">
          <Box fontSize="38px" fontWeight={600} color="#253d4e">
            {data.advText}
          </Box>
          <Box>
            {/* <Link href={data.link}> */}
            <Button rightIcon={<BsArrowRightShort />} size="sm">
              Shop Now
            </Button>
            {/* <Button rightIcon={}>Shop Now</Button> */}
            {/* </Link> */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AdvHome;
