import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import AdvHome from "@components/AdvHome";
import HomeCard from "@components/HomeCards";
import HomeTopSlider from "@components/HomeTopSlider";
import MultCards from "@components/MultCards";
import type { GetServerSideProps } from "next";
import { Key, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts, MultProducts } from "redux/slices/homeProductsSlice";
import getStore from "redux/store";
import adv from "@assets/images/adv/adv1.png";
// import { firestore } from "firebase/clientApp";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../firebase/clientApp";

const advData = {
  img: adv.src,
  advText: "Bring nature into your home",
  link: "#",
};

// const category = collection(firestore, "cloths");

const Home: React.FC = () => {
  const data = useSelector(MultProducts);
  // const dispatch = useDispatch<AppDispatch>();

  const getCategory = async () => {
    // const ref = collection(firestore, "homeFeatured");
    // await addDoc(ref, { data: demodata });
    onSnapshot(collection(firestore, "cloths"), (snapshot) => {
      snapshot.docs.map((doc) => {
        let a = { ...doc.data(), id: doc.id };
        console.log("from fire", a);
      });
    });
    // console.log(res);
  };

  useEffect(() => {
    console.log(data);
    getCategory();

    // dispatch(getProducts());
  }, []);

  return (
    <Box margin="15px">
      {/* top cardslider here */}
      <HomeTopSlider />
      {/* cards box start here */}
      <Flex gap="15px" my="15px">
        {/* left side */}
        <Box display={{ base: "none", lg: "block" }}>
          <AdvHome data={advData} />
          {/* <AdvHome data={advData} />
          <AdvHome data={advData} /> */}
        </Box>
        {/* right side */}
        <Box flexGrow={1}>
          <MultCards data={data} />
        </Box>
      </Flex>
      {/* cards end here */}
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = getStore();
  await store.dispatch(getProducts());
  return {
    props: {
      initialState: store.getState(),
    },
  };
};
