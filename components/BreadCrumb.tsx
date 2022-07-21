import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface BreadCrumbs {
  name: string;
  active: boolean;
  route: string;
}

type Props = {
  data: BreadCrumbs[];
};

const BreadCrumb: React.FC<Props> = ({ data }) => {
  return (
    <Breadcrumb separator={<BiChevronRight color="gray.500" />}>
      {data.map((item, i) => (
        <BreadcrumbItem key={i} isCurrentPage={item.active}>
          <Link href={item.route}>
            <BreadcrumbLink>{item.name}</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
