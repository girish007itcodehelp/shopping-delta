import React from "react";
import CartIcon from "./CartIcon";
// import CehckoutSlider from "./CehckoutSlider";
import Header from "./Header";
// import Header from "./Header";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <CehckoutSlider /> */}
      <Header />
      <CartIcon />

      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
