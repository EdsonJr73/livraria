import Head from "next/head";
import { Menu } from "../componentes/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/*alterei aqui para styles.container para que a navbar continuasse no padrão de tamanho do resto do sistema*/}
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
