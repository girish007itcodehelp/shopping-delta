import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

type Props = {};

const SubHeader: React.FC = () => {
  return (
    <Box display="flex" gap="15px" fontSize="14px" p="15px 0">
      <Box
        display="flex"
        alignItems="center"
        color="gray.400"
        _hover={{ color: "gray.500" }}
        cursor="pointer"
      >
        Home
        <Icon as={BiChevronDown} />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        color="gray.400"
        _hover={{ color: "gray.500" }}
        cursor="pointer"
      >
        About Us
        <Icon as={BiChevronDown} />
      </Box>
      <Box color="gray.400" _hover={{ color: "gray.500" }} cursor="pointer">
        Contact Us
      </Box>
      <Box color="gray.400" _hover={{ color: "gray.500" }} cursor="pointer">
        Offers
      </Box>
    </Box>
  );
};

export default SubHeader;
