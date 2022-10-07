import styles from "./Comment.module.css";

import { BiTrash } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa"

import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Avatar hasBorder={false} src="https://github.com/itaalobraga.png" />
      </div>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ítalo Braga</strong>
              <time title="11 de Maio às 08h13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <BiTrash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <FaRegThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
