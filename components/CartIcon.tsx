import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const CartIcon: React.FC = () => {
  return (
    <Box pos="fixed" top="50%" right="0" translateY={"-50%"} zIndex={9}>
      <Box
        bg="#eef2ff"
        borderTopLeftRadius="15px"
        borderBottomLeftRadius="15px"
        overflow="hidden"
      >
        <Box display="flex" flexDir="column" alignItems="center" p="15px">
          <Box>
            <Icon color="#047857" as={FiShoppingBag} fontSize="20px" />
          </Box>
          <Box>4 Items</Box>
        </Box>
        <Box bg="#047857" color="white" textAlign="center" py="7px">
          $50.00
        </Box>
      </Box>
    </Box>
  );
};

export default CartIcon;
