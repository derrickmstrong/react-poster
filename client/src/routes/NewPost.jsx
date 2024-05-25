import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, redirect, useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();

  function closeModalHandler(e) {
    e.stopPropagation(); // Prevent the click from propagating to the backdrop
    navigate(-1); // Go back in history
  }

  return (
    <Modal onClose={closeModalHandler}>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows={3} name="body" required />
        </p>
        <p>
          <label htmlFor="author">Your name</label>
          <input type="text" id="author" name="author" required />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={closeModalHandler}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData(); // Parse the form data
  const postData = Object.fromEntries(formData); // Convert form data to object
  
  // Post the form data
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData), // Convert object to JSON
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};
