import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <Link to={id} className={styles.link}>
      <li className={styles.post}>
        <h1 className={styles.author}>{author}</h1>
        <p className={styles.text}>{body}</p>
      </li>
    </Link>
  );
}

export default Post;
