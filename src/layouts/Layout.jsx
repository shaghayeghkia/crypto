import styles from "./Layout.module.css";

function Layout({children}) {
  return <>
  <header className={styles.header}>
    <h1>Crypto App</h1>
    <p>
       <a href="https://botostart.ir"></a>  | React.js Full Course
       </p>
  </header>
  {children}
  <footer className={styles.footer}>
    <p>Developed by Milad by ❤️ </p>
  </footer>
  </>
}

export default Layout;