import { useContext } from "react";
import { ModalsDispatchContext } from "../ModalsContext";

// 모달을 여는 각 컴포넌트마다 사용할 수 있도록 custom hook 작성
const useModals = () => {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component);
  };

  return { openModal, closeModal };
};

export default useModals;
