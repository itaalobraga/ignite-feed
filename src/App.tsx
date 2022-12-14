import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ๐" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
    ],
    publishedAt: new Date("2022-07-18 10:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal ๐" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfรณlio. Foi um baita desafio criar todo o design e codar na unha, mas consegui ๐ช๐ป",
      },
      { type: "link", content: "Acesse e deixe seu feedback ๐ devonlane.design" },
      { type: "tags", content: ["#uiux", "#userexperience"] },
    ],
    publishedAt: new Date("2022-07-15 10:30:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;