import React, { useCallback, useState } from "react";
import { isMobile } from "../../utils/unauthHelper";

import UnAuthMobileScreen from "./mobile";
import UnAuthWebScreen from "./web";
import { useTextCycle } from "../../hooks/useTextCycle";

const Index = () => {
  const texts = ["Hungry?", "Unexpected guests?", "Cooking gone wrong?"];
  const currentText = useTextCycle(texts, 3000); // 1000ms = 1 second
  //misc

  //useState
  const [open, setOpen] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState(true);
  //func
  const showDrawer = useCallback((isTrue) => {
    setOpen(true);
    setIsLoginActive(isTrue);
    // console.log({ open });
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  // console.log(open, " opennnnn");
  return (
    <div>
      {isMobile() ? (
        <UnAuthMobileScreen />
      ) : (
        <UnAuthWebScreen
          currentText={currentText}
          open={open}
          showDrawer={showDrawer}
          onClose={onClose}
          isLoginActive={isLoginActive}
        />
      )}
    </div>
  );
};

export default Index;
