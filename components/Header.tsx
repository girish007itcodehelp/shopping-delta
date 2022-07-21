import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

const Header: React.FC = () => {
  const [isStickyHeader, setIsStickyHeader] = useState<Boolean>(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? setIsStickyHeader(true) : setIsStickyHeader(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      <Box
        // className={isStickyHeader ? "is-sticky" : ""}
        bg="white"
        boxShadow=" rgba(17, 17, 26, 0.1) 0px 0px 16px"
      >
        {/* --- mainHeader --- */}
        <MainHeader />
        {/* --- mainHeader end --- */}
        {/* --- subheader --- */}
        <Container>
          <SubHeader />
        </Container>
        {/* --- subheader end --- */}
      </Box>
    </>
  );
};

export default Header;
