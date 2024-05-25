import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

export default function Modal({ children }) {
  const navigate = useNavigate();
  
  function closeModalHandler(e) {
    e.stopPropagation(); // Prevent the click from propagating to the backdrop
    navigate(-1); // Go back in history
  }
  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler} />
      <dialog open className={styles.modal}>{children}</dialog>
    </>
  );
}
