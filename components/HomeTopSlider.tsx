import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination } from "swiper";
import styles from "../styles/components/homeTopSlider.module.css";

// import images
import slider1 from "@assets/images/slider/slider-1.png";
import slider2 from "@assets/images/slider/slider-2.png";
// import CButton from "./Button";
import Link from "next/link";

interface productInterface {
  title: string;
  desc: string;
  link: string;
  bg: string;
}

const products: productInterface[] = [
  {
    title: "Best Different Type of Grocery Store.",
    desc: "Intrinsicly fashion performance based products rather than accurate benefits...",
    link: "/products",
    bg: slider1.src,
  },
  {
    title: "The Best Quality Products Guaranteed!",
    desc: "Dramatically facilitate effective total linkage for go forward processes...",
    link: "/products",
    bg: slider2.src,
  },
];
const HomeTopSlider: React.FC = () => {
  let data = products;
  return (
    <Box bg="gray.200" borderRadius="30px" overflow="hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((item, i) => (
          <SwiperSlide key={i}>
            <Box minH="400px" height="100%" maxH="400px" bg="gray.200">
              <Box
                height="100%"
                width="100%"
                minH="inherit"
                backgroundImage={item.bg}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                display="flex"
                alignItems="center"
                padding="15px"
              >
                <Box
                  width="300px"
                  height="100%"
                  display="flex"
                  flexDir="column"
                  gap="35px"
                  alignItems="center"
                  ml="65px"
                >
                  <Box fontWeight="600" fontSize="22px">
                    {item?.title}
                  </Box>
                  <Box fontSize="18px" fontWeight="500">
                    {item?.desc}
                  </Box>
                  <Link href={item?.link}>
                    <Button minW={300}>Shop Now</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomeTopSlider;
