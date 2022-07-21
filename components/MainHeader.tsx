import React from "react";
import {
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Icon,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const MainHeader: React.FC = () => {
  return (
    <Box bg="#10b981">
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="15px"
          p="15px"
        >
          <Box display="flex">
            <Text
              // bgGradient="linear(to-l, #7928CA, #FF0080)"
              // bgClip="text"
              color="white"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Devota
            </Text>
          </Box>
          <Box flexGrow={1} maxW="600px">
            <InputGroup>
              <InputLeftElement children={<FiSearch color="gray.300" />} />
              <Input
                _focus={{
                  bg: "white",
                  borderColor: "rgb(66 225 192 / 48%)",
                }}
                placeholder="Search here..."
              />
            </InputGroup>
          </Box>
          <Box display="flex" gap="35px">
            <Flex alignItems="center" justifyContent="center">
              <Icon
                cursor="pointer"
                aria-label="Search database"
                color="white"
                fontSize="25px"
                _hover={{ color: "gray.100" }}
                as={AiOutlineBell}
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center" pos="relative">
              <Icon
                cursor="pointer"
                aria-label="Search database"
                color="white"
                fontSize="25px"
                _hover={{ color: "gray.100" }}
                as={FiShoppingCart}
              />
              <Box
                pos="absolute"
                top="-10px"
                right="-12px"
                height="20px"
                minW="20px"
                as="span"
                bg="#ef4444"
                p="5px"
                fontSize="10px"
                color="white"
                borderRadius="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                2
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Icon
                cursor="pointer"
                aria-label="Search database"
                color="white"
                fontSize="25px"
                _hover={{ color: "gray.100" }}
                as={FiUser}
              />
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
