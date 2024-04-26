// import React, { useState } from "react";
import useModals from "./hooks/useModals";
import CustomModal from "./components/CustomModal";
import "./App.css";

function App() {
  // const [isModalOpened, setIsModalOpened] = useState(null);
  const { openModal } = useModals();

  const handleOnClick = () => {
    openModal(CustomModal, { content: "hello!" });
  };

  // const handleClose = () => {
  //   setIsModalOpened(false);
  // };

  return (
    <>
      <button onClick={handleOnClick}>Open Modal</button>
    </>
  );
}

export default App;
