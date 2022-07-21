import { Box } from "@chakra-ui/react";
import BreadCrumb from "@components/BreadCrumb";
import React from "react";

type Props = {};
let breadcrumbData = [
  { name: "Home", active: false, route: "/" },
  { name: "Contact", active: true, route: "/contact" },
];

const ContactUs = (props: Props) => {
  return (
    <Box>
      <BreadCrumb data={breadcrumbData} />
    </Box>
  );
};

export default ContactUs;
