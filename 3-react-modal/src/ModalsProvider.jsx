import React, { useState, useMemo } from "react";
import { ModalsStateContext, ModalsDispatchContext } from "./ModalsContext";
import Modals from "./Modals";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((prevModal) => {
      return [...prevModal, { Component, props, isOpen: true }];
    });
  };

  const close = (Component) => {
    setOpenedModals((prevModals) => {
      return prevModals.filter((item) => item.Component !== Component);
    });
  };

  // 불필요한 리렌더링 방지를 위해 provider 에서 useMemo 로 메모이제이션
  const dispatch = useMemo(
    () => ({
      open,
      close,
    }),
    []
  );

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        <Modals />
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
