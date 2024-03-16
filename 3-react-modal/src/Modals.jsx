import { useContext } from "react";
import ReactDom from "react-dom";
import { ModalsStateContext, ModalsDispatchContext } from "./ModalsContext";

// 페이지 위(document.body)에 표시되는 모달들
const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return ReactDom.createPortal(
    <div>
      {openedModals.map((modalInfo, index) => {
        const { Component, isOpen, props } = modalInfo;
        const onClose = () => {
          close(Component);
        };

        return (
          <Component key={index} isOpen={isOpen} onClose={onClose} {...props} />
        );
      })}
    </div>,
    document.body
  );
};

export default Modals;
