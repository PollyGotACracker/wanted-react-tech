import ReactModal from "react-modal";

const DefaultModal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <h1>Default Modal</h1>
      <hr />
      <button onClick={handleClose}>Close</button>
    </ReactModal>
  );
};

export default DefaultModal;
