import React from "react";
import { isMobile } from "../../utils/unauthHelper";

import UnAuthMobileScreen from "./mobile";
import UnAuthWebScreen from "./web";

const Index = () => {
  return <div>{isMobile() ? <UnAuthMobileScreen /> : <UnAuthWebScreen />}</div>;
};

export default Index;
