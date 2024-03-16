import ReactModal from "react-modal";

const CustomModal = ({ isOpen, onClose, ...props }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <h1>Custom Modal</h1>
      <p>{props?.content}</p>
      <hr />
      <button onClick={handleClose}>Close</button>
    </ReactModal>
  );
};

export default CustomModal;
