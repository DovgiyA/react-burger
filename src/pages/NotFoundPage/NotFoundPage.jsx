import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./NotFoundPage.module.css";


export default function NotFoundPage() {

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />        
      </div>
      <h1 className={styles.page404}>Страница не найдена</h1>
      </>);
  };

 