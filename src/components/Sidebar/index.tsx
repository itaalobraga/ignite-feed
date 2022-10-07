import styles from "./Sidebar.module.css";

import { BiEditAlt } from "react-icons/bi";

import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com./itaalobraga.png" />

        <strong>Ítalo Braga</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <BiEditAlt size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
